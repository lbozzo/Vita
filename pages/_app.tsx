import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem attribute="class">
      <div className="py-12 md:py-[72px] px-8">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
