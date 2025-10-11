import React from "react";
import Head from "next/head";
import AppData from "@data/app.json";

import '../styles/scss/style.scss';
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          {/* seo begin */}
          <title>{AppData.settings.siteName}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* seo end */}        
          <meta charSet="UTF-8"/>
     
          <meta name="keywords" content="HTML, CSS, JavaScript"/>
          <meta name="author" content="LivingStoneSolution"/>
       
          <meta name="description" content="Elevate your online presence with Living Stone Solution. We specialize in web development, app development, and Software Development services."/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
