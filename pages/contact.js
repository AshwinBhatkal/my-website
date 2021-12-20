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
import {
  faDev,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faMediumM,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faChess } from "@fortawesome/free-solid-svg-icons";

const social = [
  {
    url: "https://linkedin.com/in/ashwin-bhatkal",
    icon: faLinkedinIn,
    title: "LinkedIn",
  },
  {
    url: "https://twitter.com/AshwinBhatkal",
    icon: faTwitter,
    title: "Twitter",
  },
  {
    url: "https://github.com/AshwinBhatkal",
    icon: faGithub,
    title: "GitHub",
  },
  {
    url: "https://ashwinbhatkal.medium.com",
    icon: faMediumM,
    title: "Medium",
  },
  {
    url: "https://dev.to/ashwinbhatkal",
    icon: faDev,
    title: "Dev.to",
  },
  {
    url: "https://www.instagram.com/ashwinbhatkal",
    icon: faInstagram,
    title: "Instagram",
  },
  {
    url: "https://www.chess.com/member/ashwinbhatkal",
    icon: faChess,
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
              <Link href={socialIcon.url} passHref>
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
