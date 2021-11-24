import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { Button, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import ReactGA from "react-ga4";

export default function Home() {
  const classes = useStyles();

  useEffect(() => {
    ReactGA.initialize(process.env.GOOGLE_ANALYTICS.GA4_MEASUREMENT_ID);
    ReactGA.send({ hitType: "pageview", page: "/" });
  }, []);

  return (
    <Layout footer={false}>
      <Head>
        <title>
          Ashwin Bhatkal | Software Developer, Writer, Product Enthusiast
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={classes.hero}>
        <video autoPlay muted loop className={classes.bgVideo}>
          <source src="./videos/hero.mp4" type="video/mp4" />
        </video>
        <div className={classes.heroWrapper}>
          <div>
            <Typography
              variant="h2"
              className={classes.heroText}
              color={"primary"}
            >
              Hi there,
            </Typography>
            <Typography
              variant="h1"
              className={classes.heroText}
              color={"primary"}
            >
              I'm Ashwin
            </Typography>
          </div>
          <div className={classes.me}>
            <img height="300" width="300" src="./images/about.jpg" />
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <Link href={"/about"} passHref>
            <Button variant="outlined" color="primary">
              About ME
            </Button>
          </Link>
          <Link href={"/contact"} passHref>
            <Button variant="contained" color="secondary">
              Contact
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

const useStyles = makeStyles((theme) => ({
  hero: {
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 64px)",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },

  bgVideo: {
    position: "fixed",
    top: 0,
    left: 0,
    minHeight: "100vh",
    minWidth: "100%",
    zIndex: -50,
  },

  heroWrapper: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },

  heroText: {
    fontFamily: "Rubik Mono One",
    textAlign: "right",
  },

  me: {
    borderRadius: "40% 40% 40% 0",
    overflow: "hidden",
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2.25),
  },

  buttonContainer: {
    display: "flex",
    width: "300px",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
  },

  [theme.breakpoints.up("sm")]: {
    buttonContainer: {
      display: "none",
    },
  },

  [theme.breakpoints.down("md")]: {
    me: {
      display: "none",
      marginBottom: theme.spacing(2),
    },

    heroText: {
      textAlign: "center",
    },
  },

  [theme.breakpoints.down("sm")]: {
    heroWrapper: {
      flexDirection: "column",
      alignItems: "center",
    },

    me: {
      borderRadius: "50%",
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(0),
    },
  },
}));
