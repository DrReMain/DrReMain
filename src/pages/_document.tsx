import { Head, Html, Main, NextScript } from 'next/document';
import { InitializeColorMode } from 'theme-ui';

function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"></link>
      </Head>
      <body>
        <InitializeColorMode />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
