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
  async redirects() {
    return [
      { source: '/blog/10-content-proof-tips-to-catch-goofs', destination: '/blog', permanent: true },
      { source: '/blog/10-content-proof-tips-to-catch-goofs-2', destination: '/blog', permanent: true },
      { source: '/blog/10-content-proof-tips-to-catch-goofs-3', destination: '/blog', permanent: true },
      { source: '/blog/10-content-proof-tips-to-catch-goofs-4', destination: '/blog', permanent: true },
      { source: '/blog/16-best-graphic-design-online-and-offline-courses', destination: '/blog', permanent: true },
      { source: '/blog/5-steps-to-create-marketing-plan', destination: '/blog', permanent: true },
      { source: '/blog/5-steps-to-create-marketing-plan-4', destination: '/blog', permanent: true },
      { source: '/blog/how-to-become-a-graphic-designer-in-10-simple-steps', destination: '/blog', permanent: true },
      { source: '/blog/play-to-your-strength-and-supercharge-your-business', destination: '/blog', permanent: true },
      { source: '/blog/play-to-your-strength-and-supercharge-your-business-2', destination: '/blog', permanent: true },
      { source: '/blog/play-to-your-strength-and-supercharge-your-business-3', destination: '/blog', permanent: true },
      { source: '/blog/play-to-your-strength-and-supercharge-your-business-4', destination: '/blog', permanent: true }
    ];
  },
};

module.exports = nextConfig;
