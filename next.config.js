/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Add the raw-loader for handling HTML files
    config.module.rules.push({
      test: /\.html$/,
      loader: 'raw-loader',
    });

    return config;
  },
};

module.exports = nextConfig;
