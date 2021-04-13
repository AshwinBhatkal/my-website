import { Box, Container } from "@material-ui/core";
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
      <Hero />

      <Container maxWidth="md">
        <Box my={2} textAlign="justify">
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
    </Layout>
  );
}
