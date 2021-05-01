const { spacing, fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
      },
      maxWidth: {
        prose: "67ch",
      },
      fontFamily: {
        sans: ["Switzer", ...fontFamily.sans],
      },
      fontSize: {
        title: "21px",
        base: "14px",
      },
      fontWeight: {
        light: 320,
        normal: 415,
      },
      letterSpacing: {
        normal: "0.45px",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.500"),
            fontWeight: "inherit",
            letterSpacing: theme("letterSpacing.normal"),
            fontSize: theme("fontSize.base"),
            "h2,h3": {
              color: theme("colors.gray.900"),
              fontWeight: "inherit",
            },
            h2: {
              fontSize: theme("fontSize.title"),
            },
            h3: {
              marginTop: spacing[0],
              marginBottom: spacing[1],
              fontSize: theme("fontSize.base"),
            },
            "h2,p": {
              margin: spacing[0],
            },
            a: {
              display: "inline",
              color: theme("colors.gray.900"),
              fontWeight: "inherit",
              textDecoration: "none",
              borderBottomWidth: 1,
              borderBottomColor: "transparent",
              "&:hover": {
                borderBottomColor: theme("colors.gray.900"),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.400"),
            fontWeight: "inherit",
            letterSpacing: theme("letterSpacing.normal"),
            fontSize: theme("fontSize.base"),
            "h2,h3": {
              color: theme("colors.gray.50"),
              fontWeight: "inherit",
            },
            h2: {
              fontSize: theme("fontSize.title"),
            },
            h3: {
              marginTop: spacing[0],
              marginBottom: spacing[1],
              fontSize: theme("fontSize.base"),
            },
            "h2,p": {
              margin: spacing[0],
            },
            a: {
              display: "inline",
              color: theme("colors.gray.50"),
              fontWeight: "inherit",
              textDecoration: "none",
              borderBottomWidth: 1,
              borderBottomColor: "transparent",
              "&:hover": {
                borderBottomColor: theme("colors.gray.50"),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [
    require("@tailwindcss/typography")({
      modifiers: [],
    }),
  ],
};
