const { spacing, fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#f9faf8",
          100: "#f0f1f1",
          200: "#dddde0",
          300: "#b9bbbe",
          400: "#727678",
          500: "#636363",
          600: "#595653",
          700: "#44403f",
          800: "#2e2b2c",
          900: "#1c1a1c",
        },
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
        light: 350,
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
            fontSmooth: "5em",
            letterSpacing: theme("letterSpacing.normal"),
            fontSize: theme("fontSize.base"),
            "h2,h3": {
              color: theme("colors.gray.800"),
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
              color: theme("colors.gray.800"),
              fontWeight: "inherit",
              textDecoration: "none",
              borderBottomWidth: 1,
              borderBottomColor: "transparent",
              "&:hover": {
                borderBottomColor: theme("colors.gray.800"),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            fontWeight: "inherit",
            letterSpacing: theme("letterSpacing.normal"),
            fontSize: theme("fontSize.base"),
            "h2,h3": {
              color: theme("colors.gray.100"),
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
              color: theme("colors.gray.100"),
              fontWeight: "inherit",
              textDecoration: "none",
              borderBottomWidth: 1,
              borderBottomColor: "transparent",
              "&:hover": {
                borderBottomColor: theme("colors.gray.100"),
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
