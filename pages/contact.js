import {
  Box,
  Container,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import ContactForm from "../components/contactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const social = [
  {
    url: "https://linkedin.com/in/ashwin-bhatkal",
    icon: ["fab", "linkedin-in"],
    title: "LinkedIn",
  },
  {
    url: "https://twitter.com/AshwinBhatkal",
    icon: ["fab", "twitter"],
    title: "Twitter",
  },
  {
    url: "https://github.com/AshwinBhatkal",
    icon: ["fab", "github"],
    title: "GitHub",
  },
  {
    url: "https://ashwinbhatkal.medium.com",
    icon: ["fab", "medium-m"],
    title: "Medium",
  },
  {
    url: "https://dev.to/ashwinbhatkal",
    icon: ["fab", "dev"],
    title: "Dev.to",
  },
  {
    url: "https://www.instagram.com/ashwinbhatkal",
    icon: ["fab", "instagram"],
    title: "Instagram",
  },
  {
    url: "https://www.chess.com/member/ashwinbhatkal",
    icon: ["fas", "chess"],
    title: "Chess.com",
  },
];

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
            {social.map((socialIcon) => (
              <Link href={socialIcon.url} passHref key={socialIcon.title}>
                <IconButton
                  color="primary"
                  aria-label="LinkedIn"
                  component="a"
                  target="_blank"
                  title={socialIcon.title}
                >
                  <FontAwesomeIcon
                    icon={socialIcon.icon}
                    className={classes.socialIcon}
                  />
                </IconButton>
              </Link>
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
  socialIcon: {
    fontSize: theme.spacing(5),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),

    [theme.breakpoints.down("sm")]: {
      fontSize: theme.spacing(4),
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
    },
  },
}));
