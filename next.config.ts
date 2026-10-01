import type { NextConfig } from "next";

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");
  initOpenNextCloudflareForDev();
} catch {
  // package not installed locally — skip
}

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
