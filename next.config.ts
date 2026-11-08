import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Manufacturing and Technology pages were folded into Services.
  async redirects() {
    return [
      { source: "/manufacturing", destination: "/services", permanent: true },
      { source: "/technology", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
