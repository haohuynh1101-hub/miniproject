const withPlugins = require('next-compose-plugins');
const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const withImages = require('next-images');
const withSass = require(`@zeit/next-sass`);

const fs = require('fs');
const path = require('path');

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
	fs.readFileSync(path.resolve(__dirname, './styles/antd.less'), 'utf8')
);

const nextConfig = {
	images: {
		domains: [],
	},
};

module.exports = withPlugins(
	[
		[
			withSass({
				cssModules: true,
				...withLess({
					lessLoaderOptions: {
						javascriptEnabled: true,
						modifyVars: themeVariables, // make your antd custom effective
						importLoaders: 0,
					},
					cssLoaderOptions: {
						importLoaders: 3,
						localIdentName: '[local]___[hash:base64:5]',
					},
					webpack: (config, { isServer }) => {
						//Make Ant styles work with less
						if (isServer) {
							const antStyles = /antd\/.*?\/style.*?/;
							const origExternals = [...config.externals];
							config.externals = [
								(context, request, callback) => {
									if (request.match(antStyles)) return callback();
									if (typeof origExternals[0] === 'function') {
										origExternals[0](context, request, callback);
									} else {
										callback();
									}
								},
								...(typeof origExternals[0] === 'function'
									? []
									: origExternals),
							];

							config.module.rules.unshift({
								test: antStyles,
								use: 'null-loader',
							});

							config.resolve.alias['@'] = path.resolve(__dirname);
							return config;
						}
						return config;
					},
				}),
			}),
		],
		[withImages],
	],
	nextConfig
);
