import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import Hero from "../components/hero";
import Layout from "../components/layout";

const useStyles = makeStyles((theme) => ({
  description: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(12),

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      color: "grey",

      "& h4": {
        fontSize: "1.5rem",
      },
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <Head>
        <title>Ashwin Bhatkal - Storyteller, Developer, Blogger</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Hero />
      </section>
      <Container maxWidth="lg">
        <section className={classes.description}>
          <Typography variant="h4" align="center">
            I’m an individual who believes success is best achieved by working
            on all spheres of your life that you deem important.
          </Typography>
        </section>
      </Container>
      <Container maxWidth="md">
        <Box clone my={12}>
          <section>
            <Typography variant="h2" align="center" gutterBottom>
              Ideas I Live By
            </Typography>
            <List>
              <ListItem>
                <ListItemText>1. Be real and authentic</ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText>2. Everything is meant to be easy</ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText>3. Treat everyone kindly</ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText>
                  4. There's no problem knowledge cannot solve
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText>
                  5. No can stop you from getting what you want. Similarly you
                  cannot get in the way of someone else getting what they want.
                </ListItemText>
              </ListItem>
            </List>
          </section>
        </Box>
      </Container>
    </Layout>
  );
}
