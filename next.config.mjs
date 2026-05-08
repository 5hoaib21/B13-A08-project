/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
     {
        protocol: 'https',
        hostname: '**', // Eita diye jekono HTTPS domain allow hobe
      },
      {
        protocol: 'http',
        hostname: '**', // Eita diye jekono HTTP domain allow hobe (optional)
      },
    ]
  }
};

export default nextConfig;
