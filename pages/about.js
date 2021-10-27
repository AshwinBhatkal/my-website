import { Container, makeStyles, Typography } from "@material-ui/core";
import Head from "next/head";
import Layout from "../components/layout";
import AboutMe from "../components/aboutMe";
import MyIdeas from "../components/myIdeas";
import ContactForm from "../components/contactForm";
import { headlines } from "./components/data";

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
        <section className={classes.section}>
          <Container maxWidth="lg">
            {headlines.map((headline) => (
              <Typography variant="h4" align="center" key={1}>
                {headline}
              </Typography>
            ))}
          </Container>
        </section>
        <section
          className={classes.section}
          style={{
            marginTop: 0,
          }}
        >
          <MyIdeas />
        </section>
        <section className={classes.section}>
          <ContactForm />
        </section>
      </Container>
    </Layout>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(10),

    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(8),
    },
  },

  landing: {
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 60px)",
  },

  hero: {
    flexGrow: 1,
  },

  section: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
    },
  },
}));
