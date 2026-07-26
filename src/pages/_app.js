import React, { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import AppData from "@data/app.json";

import '../styles/scss/style.scss';
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const bookingLinks = document.querySelectorAll('a[href="/book-geo"]');

    bookingLinks.forEach((link) => {
      link.setAttribute("data-cal-link", "oliyad-deyasa-oiiybc/0924416887");
      link.setAttribute("data-cal-namespace", "0924416887");
      link.setAttribute(
        "data-cal-config",
        '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      );
    });
  }, [router.asPath]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Script id="cal-booking-embed" strategy="afterInteractive">
        {`
          (function (C, A, L) {
            let p = function (a, ar) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function () {
              let cal = C.Cal;
              let ar = arguments;
              if (!cal.loaded) {
                cal.ns = {};
                cal.q = cal.q || [];
                d.head.appendChild(d.createElement("script")).src = A;
                cal.loaded = true;
              }
              if (ar[0] === L) {
                const api = function () { p(api, arguments); };
                const namespace = ar[1];
                api.q = api.q || [];
                if (typeof namespace === "string") {
                  cal.ns[namespace] = cal.ns[namespace] || api;
                  p(cal.ns[namespace], ar);
                  p(cal, ["initNamespace", namespace]);
                } else {
                  p(cal, ar);
                }
                return;
              }
              p(cal, ar);
            };
          })(window, "https://app.cal.com/embed/embed.js", "init");

          Cal("init", "0924416887", { origin: "https://app.cal.com" });
          Cal.config = Cal.config || {};
          Cal.config.forwardQueryParams = true;
          Cal.ns["0924416887"]("ui", {
            hideEventTypeDetails: false,
            layout: "month_view"
          });
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
