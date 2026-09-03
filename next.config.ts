import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-enerbio.misionary.com.ar",
      },
    ],
  },
};

export default nextConfig;
