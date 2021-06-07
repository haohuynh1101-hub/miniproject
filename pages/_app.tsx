import { AppProps /*, AppContext */ } from "next/app";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import NextNprogress from "nextjs-progressbar";

import { appWithTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { initializeStore, RootStore, RootStoreProvider } from "@models";
import "tailwindcss/tailwind.css";
import "../styles/antd.less";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "../styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
  const [rootStore, setRootStore] = useState<RootStore | null>(null);

  useEffect(() => {
    initializeStore(pageProps?.initialState).then(setRootStore);
  }, []);

  if (!rootStore) return <></>;
  return (
    <>
      <Head>
        <title>My new cool app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RootStoreProvider value={rootStore}>
        <NextNprogress
          color="#00a68f"
          startPosition={0.3}
          stopDelayMs={200}
          height={2}
        />
        <Component {...pageProps} />
      </RootStoreProvider>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default appWithTranslation(App);
