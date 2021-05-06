import { Container, makeStyles } from "@material-ui/core";
import Head from "next/head";
import Layout from "../components/layout";
import AboutMe from "../components/aboutMe";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(10),

    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(8),
    },
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Layout>
      <Head>
        <title>About - Ashwin Bhatkal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="md">
        <section className={classes.root}>
          <AboutMe />
        </section>
      </Container>
    </Layout>
  );
}
