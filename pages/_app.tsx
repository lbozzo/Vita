import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProvider } from "theme-ui";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemeProvider defaultTheme="light">
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </NextThemeProvider>
  );
}

export default MyApp;
