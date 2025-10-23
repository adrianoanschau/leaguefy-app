import type { NextConfig } from "next";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${SUPABASE_URL}/:path*`,
      },
    ];
  },
  allowedDevOrigins: [SUPABASE_URL],
};

export default nextConfig;
