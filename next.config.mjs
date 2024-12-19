/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Use static export output
    images: {
      unoptimized: true, // Optional: Disable image optimization for static export
    },
  };
  
  export default nextConfig;
  