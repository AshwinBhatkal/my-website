import { Box, Container, Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#FFCB05",
    textAlign: "center",
    height: "100px",
    display: "flex",
    alignItems: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Container maxWidth="md">
        <Link>Home</Link> <Link>About</Link> <Link>Contact</Link>{" "}
      </Container>
    </Box>
  );
}
