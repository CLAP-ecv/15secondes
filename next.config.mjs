import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

export default withPWA({
  // Your Next.js config
  images: {
    remotePatterns: [
      {
        hostname: "www.20minutes.tv",
        pathname: "**",
        protocol: "https"
      },
      {
        hostname: "via.placeholder.com",
        pathname: "**",
        protocol: "https"
      }
    ]
  }
});
