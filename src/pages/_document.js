import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* meta begin */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          {/* meta end */}

          {/* favicon begin */}
          <link rel="apple-touch-icon" sizes="180x180" href="/img/photo/favicon_io/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/img/photo/favicon_io/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/img/photo/favicon_io/favicon-16x16.png" />
          <link rel="manifest" href="/img/photo/favicon_io/site.webmanifest" />
          <link rel="shortcut icon" href="/img/photo/favicon_io/favicon.ico" />
          {/* favicon end */}

          {/* public assets begin */}
          <link rel="stylesheet" href="/css/plugins/bootstrap-grid.css" />
          <link rel="stylesheet" href="/css/plugins/font-awesome.min.css" />
          <link rel="stylesheet" href="/css/plugins/swiper.min.css" />
          <link rel="stylesheet" href="/css/plugins/magnific-popup.css" />  
          {/* public assets end */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
