import { Box, Container, Typography } from "@material-ui/core";
import Head from "next/head";
import Layout from "../components/layout";

export default function Explore() {
  return (
    <Layout>
      <Head>
        <title>Explore | Ashwin Bhatkal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          Explore
        </Typography>
      </Container>
    </Layout>
  );
}
