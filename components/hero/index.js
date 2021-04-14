import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hero: {
    height: "75vh",
    width: "100%",
    display: "grid",
    alignItems: "center",
    backgroundImage: "url(/images/hero1.jpg)",
    backgroundSize: "cover",
    color: theme.palette.common.white,

    "& h2": {
      mixBlendMode: "difference",
      color: theme.palette.common.white,
      fontWeight: 900,
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
