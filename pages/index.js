import Head from "next/head";
import Layout from "../components/layout";
import Hero from "../components/hero";
import MyIdeas from "../components/myIdeas";
import ContactForm from "../components/contactForm";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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

export default function Home() {
  const classes = useStyles();

  return (
    <Layout>
      <Head>
        <title>Ashwin Bhatkal - Writer, Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box className={classes.landing}>
        <section className={classes.hero}>
          <Hero />
        </section>
        <section className={classes.section}>
          <Container maxWidth="lg">
            <Typography variant="h4" align="center">
              I believe success is best achieved by working on all spheres of
              your life that you deem important.
            </Typography>
          </Container>
        </section>
      </Box>
      <Container maxWidth="md">
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
