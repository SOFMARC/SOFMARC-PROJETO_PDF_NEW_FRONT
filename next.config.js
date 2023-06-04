/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
  "@fullcalendar/timegrid"
]);
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  swcMinify: true,
  basePath: "",
  assetPrefix : "",
  images: {
    loader:"akamai",
    path:""
  },
}

module.exports = nextConfig
