import React from 'react';
import {
  default as NextDocument,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import light from 'src/styles/themes/light';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={light.palette.primary.main} />
          <meta charSet="utf-8" />
          <script defer src="/__/firebase/8.2.1/firebase-app.js"></script>
          <script defer src="/__/firebase/8.2.1/firebase-auth.js"></script>
          <script defer src="/__/firebase/8.2.1/firebase-firestore.js"></script>
          <script defer src="/__/firebase/8.2.1/firebase-messaging.js"></script>
          <script defer src="/__/firebase/8.2.1/firebase-storage.js"></script>
          <script defer src="/__/firebase/init.js"></script>
          <script
            defer
            src="https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.js"
            id="firebaseUIScript"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="notistack"></div>
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
Document.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await NextDocument.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
