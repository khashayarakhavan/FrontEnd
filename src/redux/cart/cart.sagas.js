// import { all, call, takeLatest, put } from 'redux-saga/effects';

// import UserActionTypes from '../user/user.types';
// import { clearCart } from './cart.actions';

// export function* clearCartOnSignOut() {
//   yield put(clearCart());
// }

// export function* onSignOutSuccess() {
//   yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
// }

// export function* cartSagas() {
//   yield all([call(onSignOutSuccess)]);
// }

import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { getUserCartRef } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../user/user.selectors";
import UserActionTypes from "../user/user.types";
import { clearCart, setCartFromFirebase } from "./cart.actions";
import { selectCartItems } from "./cart.selectors";
import CartActionTypes from "./cart.types";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id); // find if there is/not a Ref existing in database.
      const cartItems = yield select(selectCartItems); // select cartItems from store.
      yield cartRef.update({ cartItems }); // update firestore collection with cartItems 
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* onCartChange() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM_FROM_CART,
    ],
    updateCartInFirebase
  );
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onCartChange), call(onUserSignIn)]);
}