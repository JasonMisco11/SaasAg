// /** @type {import('next').NextConfig} */
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
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // You can leave port and pathname as wildcards or specific if needed
        port: "",
        pathname: '/**',
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
