/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
        port: "",
        pathname: "/images/products/thumbnails/**",
      },
      {
        protocol: "https",
        hostname: "magicui.design",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
