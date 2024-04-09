import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true', //当环境变量ANALYZE为true时开启
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: 'standalone',
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
  poweredByHeader: false,
};

export default withBundleAnalyzer(nextConfig);
