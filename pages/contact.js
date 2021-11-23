import { Container, makeStyles } from "@material-ui/core";
import Head from "next/head";
import Layout from "../components/layout";
import ContactForm from "../components/contactForm";

export default function Contact() {
  const classes = useStyles();
  return (
    <Layout>
      <Head>
        <title>Contact | Ashwin Bhatkal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="md">
        <section className={classes.section}>
          <ContactForm />
        </section>
      </Container>
    </Layout>
  );
}

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
    },
  },
}));
