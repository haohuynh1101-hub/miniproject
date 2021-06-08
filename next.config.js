const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

const plugins = [withCSS, withLess, withSass];
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  lessLoaderOptions: {
    javascriptEnabled: true,
  },
};

module.exports = withPlugins(plugins, nextConfig);
