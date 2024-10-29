import toc from 'remark-toc'

import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx',
  mdxOptions: {
    remarkPlugins: [toc],
  },
})

/** @type {import('next').NextConfig} */
export default withNextra({
  reactStrictMode: true,
})
