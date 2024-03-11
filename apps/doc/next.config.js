const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',

  themeConfig: './theme.config.jsx',
})

/** @type {import('next').NextConfig} */
module.exports = withNextra({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
})
