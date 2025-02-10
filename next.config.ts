import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: "www.shutterstock.com" },
      { 
        protocol: 'https', 
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: '/images',
        port: ''
      }
    ]
  }
};

export default nextConfig;