export const palette = {
  white: "#FFF",
  copperRed: "#CE6C47",
  darkGray: {
    1: "rgb(142, 142, 147)",
    2: "rgb(99, 99, 102)",
    3: "rgb(72, 72, 74)",
    4: "rgb(58, 58, 60)",
    5: "rgb(44, 44, 46)",
    6: "rgb(28, 28, 30)",
  },
  lightGray: {
    1: "rgb(142, 142, 147)",
    2: "rgb(174, 174, 178)",
    3: "rgb(199, 199, 204)",
    4: "rgb(209, 209, 214)",
    5: "rgb(229, 229, 234)",
    6: "rgb(242, 242, 247)",
  },
};

export default {
  config: {
    printColorModeName: "light",
    useCustomProperties: false,
    useLocalStorage: false,
    useColorSchemeMediaQuery: false,
  },
  breakpoints: ["640px", "768px", "1024px", "1280px", "1536px"],
  fonts: {
    body: '"Karla", system-ui, sans-serif',
    heading: '"Karla", sans-serif',
  },
  fontWeights: {
    body: 300,
    heading: 400,
  },
  colors: {
    primary: palette.darkGray["3"],
    text: palette.darkGray["2"],
    heading: palette.darkGray["4"],
    background: palette.white,
    imageBackground: palette.lightGray["2"],
    shadow: palette.lightGray["6"],
    modes: {
      dark: {
        primary: palette.darkGray["3"],
        text: palette.lightGray["3"],
        heading: palette.lightGray["6"],
        background: palette.darkGray["5"],
        imageBackground: palette.lightGray["2"],
        shadow: palette.darkGray["4"],
      },
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      fontSize: "inherit",
      color: "heading",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      fontSize: 14,
      lineHeight: 1.65,
    },
    a: {
      display: "inline",
      color: "heading",
      textDecoration: "none",
      borderBottomWidth: 1,
      borderBottomColor: "transparent",
      borderBottomStyle: "solid",
      "&:hover": {
        borderBottomColor: "heading",
      },
    },
  },
  forms: {
    select: {
      minWidth: "max-content",
      paddingRight: 4,
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: "text",
      "&:hover": {
        color: "heading",
      },
    },
  },
};
