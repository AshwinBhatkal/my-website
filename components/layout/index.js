import Header from "../header";
import Footer from "../footer";
import { Box } from "@material-ui/core";

export default function Layout(props) {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <Header />
        <main>{props.children}</main>
      </Box>
      {props.footer !== false && <Footer />}
    </Box>
  );
}
