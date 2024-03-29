/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "flagcdn.com",
    ],
    unoptimized: true,
  },
  swcMinify: true,
  optimizeFonts: true,
  productionBrowserSourceMaps: true,
};

export default nextConfig;
