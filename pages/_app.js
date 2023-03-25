import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../styles/theme";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/global.css";
import { GTM_ID, pageview } from "lib/gtm";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faDev,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faMediumM,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faChess } from "@fortawesome/free-solid-svg-icons";

// See https://github.com/FortAwesome/react-fontawesome#integrating-with-other-tools-and-frameworks
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
library.add(
  faDev,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faMediumM,
  faTwitter,
  faChess
);

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const router = useRouter();

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
