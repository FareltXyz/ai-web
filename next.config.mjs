/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
     remotePatterns: [new URL('https://lh3.googleusercontent.com/a/**')]
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
