import { Box, Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hero: {
    minHeight: "100px",
    width: "100%",
    display: "grid",
    alignItems: "center",
    backgroundImage: "url(/images/hero1.jpg)",
    backgroundSize: "cover",
    color: theme.palette.common.white,
  },
  heroText: {
    textAlign: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.hero}>
      <Box className={classes.heroText}>
      <Link>Home</Link> <Link>About</Link> <Link>Contact</Link>{" "}
      </Box>
      {/* <img
        src="/images/heroTriangle.svg"
        alt="overlay"
        className={classes.overlay}
      /> */}
    </Box>
  );
}

