import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>FM 23 Utilities Program</title>
        <link rel="icon" href="/football-ball.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
