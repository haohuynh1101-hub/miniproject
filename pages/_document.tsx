import React from 'react';
import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { createEnvsFromList } from 'env';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		// Step 1: Create an instance of ServerStyleSheet
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			// Step 2: Retrieve styles from components in the page
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	// static getInitialProps({ renderPage }) {
	// 	// Step 1: Create an instance of ServerStyleSheet
	// 	const sheet = new ServerStyleSheet();

	// 	// Step 2: Retrieve styles from components in the page
	// 	const page = renderPage((App) => (props) =>
	// 		sheet.collectStyles(<App {...props} />)
	// 	);

	// 	// Step 3: Extract the styles as <style> tags
	// 	const styleTags = sheet.getStyleElement();

	// 	// Step 4: Pass styleTags as a prop
	// 	return { ...page, styleTags };
	// }

	render(): JSX.Element {
		const scriptEnv = `window.__ENV__ = ${JSON.stringify(
			createEnvsFromList()
		)}`;
		return (
			<Html lang='en'>
				<Head>
					{/* <script dangerouslySetInnerHTML={{ __html: scriptEnv }} /> */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
