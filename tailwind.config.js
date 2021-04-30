const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontSize: {
      title: "21px",
      base: "14px",
    },
    fontWeight: {
      light: 315,
      normal: 415,
    },
    letterSpacing: {
      normal: "0.45px",
    },
    extend: {
      maxWidth: {
        prose: "67ch",
      },
      fontFamily: {
        sans: ["Switzer", ...fontFamily.sans],
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
      }),
    },
  },
  variants: { typography: ["dark"] },
  plugins: [require("@tailwindcss/typography")],
};
