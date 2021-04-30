import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hero: {
    minHeight: "70vh",
    width: "100%",
    display: "grid",
    alignItems: "center",
    backgroundImage: "url(/images/hero1.jpg)",
    backgroundSize: "cover",
    color: theme.palette.common.white,

    "& h2": {
      // mixBlendMode: "difference",
      // color: theme.palette.common.white,
      fontWeight: 900,
    },

    [theme.breakpoints.down("sm")]: {
      minHeight: "62.5vh",

      "& h2": {
        fontSize: "3rem",
      },
    },
  },
  heroText: {
    textAlign: "center",
  },
  // overlay: {
  //   position: "absolute",
  //   bottom: 0,
  //   right: 0,
  //   transform: "rotate(180deg)",
  // },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Box className={classes.hero}>
      <Box className={classes.heroText}>
        <Typography variant="h2">ALOLA, I'M ASHWIN</Typography>
      </Box>
      {/* <img
        src="/images/heroTriangle.svg"
        alt="overlay"
        className={classes.overlay}
      /> */}
    </Box>
  );
}
