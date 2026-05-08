/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        hostname: 'i.ibb.co.com',
      },
       {
   
        hostname: "lh3.googleusercontent.com",
      },
       {
   
        hostname: "img.daisyui.com",
      },
    ]
  }
};

export default nextConfig;
