import { css } from "styled-components";

//Code
export const respond = {
  pc: {
    max: (...args) => css`
      @media (min-width: 2000px) {
        ${css(...args)};
      }
    `,
    large: (...args) => css`
      @media (min-width: 1600px) {
        ${css(...args)};
      }
    `,
    medium: (...args) => css`
      @media (min-width: 1400px) {
        ${css(...args)};
      }
    `,
    small: (...args) => css`
      @media (min-width: 1350px) {
        ${css(...args)};
      }
    `,
    min: (...args) => css`
      @media (min-width: 1024px) {
        ${css(...args)};
      }
    `,
  },
  tablet: {
    max: (...args) => css`
      @media (min-width: 1100px) and (hover: none) and (pointer: coarse) and (orientation: landscape) {
        ${css(...args)};
      }
    `,
    large: (...args) => css`
      @media screen (min-width: 1024px) and (hover: none) {
        ${css(...args)};
      }
    `,
    medium: (...args) => css`
      @media (min-width: 828px) {
        ${css(...args)};
      }
    `,
    small: (...args) => css`
      @media (min-width: 768px) {
        ${css(...args)};
      }
    `,
    min: (...args) => css`
      @media (min-width: 720px) {
        ${css(...args)};
      }
    `,
  },
  mobile: {
    max: (...args) => css`
      @media (min-width: 640px) {
        ${css(...args)};
      }
    `,
    large: (...args) => css`
      @media (min-width: 540px) {
        ${css(...args)};
      }
    `,
    medium: (...args) => css`
      @media (min-width: 480px) {
        ${css(...args)};
      }
    `,
    small: (...args) => css`
      @media (min-width: 414px) {
        ${css(...args)};
      }
    `,
    min: (...args) => css`
      @media (min-width: 320px) {
        ${css(...args)};
      }
    `,
  },
  wear: {
    max: (...args) => css`
      @media (min-width: 300px) {
        ${css(...args)};
      }
    `,
    large: (...args) => css`
      @media (min-width: 250px) {
        ${css(...args)};
      }
    `,
    medium: (...args) => css`
      @media (min-width: 200px) {
        ${css(...args)};
      }
    `,
    small: (...args) => css`
      @media (min-width: 10px) {
        ${css(...args)};
      }
    `,
    min: (...args) => css`
      @media (min-width: 120px) {
        ${css(...args)};
      }
    `,
  },

  tablet_medium: (...args) => css`
    @media (max-width: 700px) {
      ${css(...args)};
    }
  `,
  tablet_large: (...args) => css`
    @media (max-width: 900px) {
      ${css(...args)};
    }
  `,
  desktop_medium: (...args) => css`
    @media (max-width: 1200px) {
      ${css(...args)};
    }
  `,
  desktop_large: (...args) => css`
    @media (max-width: 1600px) {
      ${css(...args)};
    }
  `,
};


