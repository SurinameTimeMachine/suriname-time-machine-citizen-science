import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/ecsa2026',
        destination: '/ecsa2026/index.html',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
