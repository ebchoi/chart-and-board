export const colors = {
  white: "#FFFFFF",
  black: "#000000",
  darkgray: "rgba(46,46,46,1)",
  hoverWhite: "rgba(255,255,255,.2)",
  gray: "#cccccc",
  midalGray: "rgba(0, 0, 0, 0.5)",
};

export const deviceSizes = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1024px",
};

export const device = {
  mobile: `@media only screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `@media only screen and (min-width: ${deviceSizes.tablet}) and (max-width: ${deviceSizes.desktop})`,
  desktop: `@media only screen and (min-width: ${deviceSizes.desktop})`,
};
