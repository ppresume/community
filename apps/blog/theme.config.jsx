// visual studio code will report eslint warning of
// import/no-anonymous-default-export if we export this directly as default
const themeConfig = {
  footer: <p>2023 © PPResume.</p>,
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: 'Read More →',
  postFooter: null,
  darkMode: false,
}

export default themeConfig
