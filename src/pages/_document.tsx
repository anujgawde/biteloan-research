import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <script>
          {/* Paste your Google Tag Manager code snippet here */}
          <GoogleAnalytics gaId={process.env.GAID!} />
          <GoogleTagManager gtmId={process.env.GAID!} />
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
