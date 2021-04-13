import { Box, Container, Typography } from "@material-ui/core";
import Head from "next/head";
import Layout from "../components/layout";

export default function Explore() {
  return (
    <Layout>
      <Head>
        <title>Explore - Ashwin Bhatkal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          Explore
        </Typography>
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
