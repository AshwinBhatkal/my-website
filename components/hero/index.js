import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hero: {
    height: "100%",
    width: "100%",
    display: "grid",
    alignItems: "center",
    backgroundImage: "url(/images/hero.jpg)",
    backgroundSize: "cover",
    color: theme.palette.common.white,

    "& h2": {
      fontWeight: 900,
    },

    [theme.breakpoints.down("sm")]: {
      "& h2": {
        fontSize: "3rem",
      },
    },
  },
  heroText: {
    textAlign: "center",
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Box className={classes.hero}>
      <Box className={classes.heroText}>
        <Typography variant="h2">ALOLA, I'M ASHWIN</Typography>
      </Box>
    </Box>
  );
}
