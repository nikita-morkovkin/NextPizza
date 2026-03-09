import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.dodostatic.net",
        port: "",
        pathname: "/api/v1/pizzas/render/**",
      },
    ],
  },
};

export default nextConfig;
