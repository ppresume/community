export function Favicon() {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicons/favicon-16x16.png"
      />
      <link
        rel="manifest"
        // We need to set `crossOrigin` here otherwise we get the following
        // error:
        //
        // ```
        // Manifest: Line: 1, column: 1, Syntax error.
        // ```
        //
        // Ref:
        // - https://bobbyhadz.com/blog/manifest-line-1-column-1-syntax-error#set-the-crossorigin-property-to-use-credentials
        // - https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin#example_web_manifest_with_credentials
        crossOrigin="use-credentials"
        href="/static/favicons/site.webmanifest"
      />
      <link
        rel="mask-icon"
        href="/static/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta
        name="msapplication-config"
        content="/static/favicons/browserconfig.xml"
      />
      <meta name="theme-color" content="#ffffff" />
    </>
  );
}
