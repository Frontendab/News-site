/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  reactStrictMode: true,
  images: {
    domains: [
      "cdn2.unrealengine.com",
      "i.ytimg.com",
      "cdn.toucharcade.com",
      "img.gamepix.com",
      "images.pexels.com",
    ],
  },
};

module.exports = nextConfig;
