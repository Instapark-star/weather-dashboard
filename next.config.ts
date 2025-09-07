import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Allow production builds to complete successfully
    // even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
