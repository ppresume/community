const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.jsx",
});

/** @type {import('next').NextConfig} */
module.exports = withNextra({
  reactStrictMode: true,
});
