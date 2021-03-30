declare interface ENVIRONMENT {
	API_PUBLIC_URL: string;
	API_INTERNAL_URL: string;
}

declare interface Window {
	__ENV__: ENVIRONMENT;
}

declare module '*.css';
