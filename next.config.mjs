import webpack from 'next/dist/compiled/webpack/webpack-lib.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'self': JSON.stringify(isServer ? 'global' : 'self'),
      })
    );
    return config;
  },
};

export default nextConfig;
