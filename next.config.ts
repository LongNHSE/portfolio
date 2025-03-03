/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*", // ✅ Fix: Proper wildcard syntax for all routes
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // 🔒 Change to your domain for security (e.g., "https://yourdomain.com")
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Content-Type, Authorization",
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true", // ✅ Fix: Allows credentials like cookies if needed
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
