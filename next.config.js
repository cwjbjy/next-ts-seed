const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true', //当环境变量ANALYZE为true时开启
});

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    additionalData: '@import "@/assets/styles/index.scss";',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.test.com',
      },
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
