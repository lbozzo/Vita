import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="py-12 md:py-[72px] px-8">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
