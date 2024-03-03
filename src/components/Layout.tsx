// Layout.tsx

import React from "react";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";
const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        {/* Add your meta tags, title, stylesheets, etc. */}
        <title>My Next.js App</title>

        <GoogleAnalytics gaId={process.env.GAID!} />
      </Head>
      <header>
        {/* Your header component */}
        <nav>{/* Your navigation component */}</nav>
      </header>
      <main>{children}</main>
      <footer>{/* Your footer component */}</footer>
    </>
  );
};

export default Layout;
