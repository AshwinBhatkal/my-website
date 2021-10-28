import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import SocialIcon from "../socialIcon";
import { socialButtons } from "./data";

// The footer contains the copyright and the social icons
export default function Footer() {
  const classes = useStyles();
  const date = new Date();
  const startYear = 2021;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Box className={classes.content}>
          <Box className={classes.copyright}>
            <Typography variant="body1">
              <em>
                © Ashwin Bhatkal {startYear}
                {date.getFullYear() !== startYear
                  ? ` - ${date.getFullYear() % 2000}`
                  : ""}
              </em>
            </Typography>
          </Box>
          <Box>
            {/* This is the social icons section in the footer */}
            {socialButtons.map((social) => (
              <SocialIcon social={social} key={social.label} />
            ))}
          </Box>
        </Box>
      </Container>
    </footer>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    // backgroundImage: "url(/images/hero.jpg)",
    // backgroundSize: "cover",
    background: "#FFCB05"
  },
  content: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },

  [theme.breakpoints.down("xs")]: {
    content: {
      flexDirection: "column",
    },
    copyright: {
      marginBottom: theme.spacing(1),
    },
  },
}));
