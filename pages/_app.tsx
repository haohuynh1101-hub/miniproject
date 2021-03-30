import { AppProps /*, AppContext */ } from 'next/app';
import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>My new cool app</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Component {...pageProps} />
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

export default App;
