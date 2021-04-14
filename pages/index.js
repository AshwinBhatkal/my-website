import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import Hero from "../components/hero";
import Layout from "../components/layout";

export default function Home() {
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
        <Box clone my={12}>
          <section>
            <Typography variant="h4" align="center">
              I’m an authentic individual passionate about a system that helps
              people to be their most productive self.
            </Typography>
          </section>
        </Box>
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
