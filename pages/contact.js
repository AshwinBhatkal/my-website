import {
  Box,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import Layout from "../components/layout";
import ContactForm from "../components/contactForm";
import socialPlatforms from "data/socialPlatforms";
import IconButtonLink from "components/iconButtonLink";

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
          <Typography variant="h3" align="center">
            You can find me on
          </Typography>
          <Box textAlign="center" my={4}>
            {socialPlatforms.map((platform) => (
              <IconButtonLink
                url={platform.url}
                title={platform.title}
                icon={platform.icon}
                key={platform.title}
                useSpacing
              />
            ))}
          </Box>
          <Typography variant="h5" align="center">
            Feel free to connect with me on the above platforms or use the
            contact form below.
          </Typography>
        </section>
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
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
  },
}));
