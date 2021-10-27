import Head from "next/head";
import Layout from "../components/layout";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

export default function Home() {
  const classes = useStyles();

  return (
    <Layout footer={false}>
      <Head>
        <title>Ashwin Bhatkal - Writer, Developer, Product Enthusiast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={classes.hero}>
        <video
          autoPlay
          muted
          loop
          className={classes.bgVideo}
          poster="https://images.unsplash.com/photo-1492931307820-62fa5a68e0df"
        >
          <source src="./videos/hero.mp4" type="video/mp4" />
        </video>
        <div className={classes.heroWrapper}>
          <div className={classes.heroTextContainer}>
            <Typography variant="h2" className={classes.heroText} gutterBottom>
              Hi there,
            </Typography>
            <Typography
              variant="h1"
              className={classes.heroText}
              style={{ lineHeight: 0.875 }}
            >
              I'm Ashwin
            </Typography>
          </div>
          <div className={classes.me}>
            <img height="300" width="300" src="./images/about.jpg" />
          </div>
        </div>
      </section>
    </Layout>
  );
}

const useStyles = makeStyles((theme) => ({
  hero: {
    display: "flex",
    height: "calc(100vh - 64px)",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },

  bgVideo: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    zIndex: -50,
  },

  heroWrapper: {
    display: "flex",
    alignItems: "flex-end",
  },

  heroTextContainer: {
    textAlign: "right",
  },

  me: {
    borderRadius: "40% 40% 40% 0",
    overflow: "hidden",
    marginLeft: theme.spacing(2),
  },

  [theme.breakpoints.down("sm")]: {
    heroWrapper: {
      flexDirection: "column",
      alignItems: "center",
    },

    heroTextContainer: {
      textAlign: "center",
    },

    me: {
      borderRadius: "0 40% 40% 40%",
      overflow: "hidden",
      marginTop: theme.spacing(1),
    },
  },

  heroText: {
    fontFamily: "Rubik Mono One",
    color: theme.palette.secondary.main,
  },
}));
