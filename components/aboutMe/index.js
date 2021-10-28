import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  about: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap-reverse",

    "& div": {
      width: "45%",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        marginBottom: theme.spacing(2),
      },
    },
  },

  picture: {
    width: "100%",
    opacity: "0.95",
    // transform: "scaleX(-1)",
    borderRadius: "50%",
  },

  description: {
    marginBottom: theme.spacing(3),
  },
}));

export default function AboutMe() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" align="center" gutterBottom>
        ABOUT ME
      </Typography>
      <Box className={classes.about}>
        <Box>
          <Typography
            variant="subtitle1"
            gutterBottom
            align="justify"
            className={classes.description}
          >
            Hi there. I'm Ashwin. I'm a software developer, writer and aspire to
            be a storyteller someday.
          </Typography>

          <Typography
            variant="subtitle1"
            gutterBottom
            align="justify"
            className={classes.description}
          >
            I enjoy having deep conversations since they help me form a strong
            bond with the other person and also provide me with a different
            perspective that can help me improve my ways.
          </Typography>

          {/* <Typography
          variant="subtitle1"
          gutterBottom
          align="justify"
          className={classes.description}
        >
          "If you get one percent better each day for one year, you'll end
          up thirty-seven times better by the time you're done. " - James
          Clear.
        </Typography> */}

          <Typography
            variant="subtitle1"
            gutterBottom
            align="justify"
            className={classes.description}
          >
            I'm a huge fan of MS Dhoni and from him I derive my sense of
            dedication to the process than being focused on the results. I
            believe in having a system that helps you improve one day at a time.
            {/* I get annoyed when it does not happen. But, I'm working on
          learning to let life loose. Well, not completely! */}
          </Typography>

          <Typography variant="subtitle1" gutterBottom align="justify">
            While I do have a guilt free love for cheese and chicken, I love
            food in general, and would be up to cook together or eat at any
            place and at any time.
            {/* Though I like trying all cuisine, I try to stay away
          from Asian. */}
          </Typography>

          {/* <Typography variant="subtitle1" gutterBottom align="justify">
          Add something about travel here.
        </Typography> */}
        </Box>
        <Box>
          <img
            src="/images/about.jpg"
            alt="Picture of the author"
            className={classes.picture}
          />
        </Box>
      </Box>
    </>
  );
}
