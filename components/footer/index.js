import {
  Box,
  Container,
  IconButton,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Instagram, LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  footer: {
    minHeight: "100px",
    width: "100%",
    display: "grid",
    alignItems: "center",
    backgroundImage: "url(/images/hero.jpg)",
    backgroundSize: "cover",
    color: theme.palette.common.black,
  },
  content: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  social: {
    color: theme.palette.common.black,
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

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Box className={classes.content}>
          <Box className={classes.copyright}>
            <Typography variant="body1">
              <em>© Ashwin Bhatkal 2021</em>
            </Typography>
          </Box>
          <Box>
            <Link href="https://www.instagram.com/ashwinbhatkal/" target="#">
              <IconButton aria-label="instagram">
                <Instagram fontSize="large" className={classes.social} />
              </IconButton>
            </Link>
            <Link href="https://in.linkedin.com/in/ashwin-bhatkal/" target="#">
              <IconButton aria-label="linkedin">
                <LinkedIn fontSize="large" className={classes.social} />
              </IconButton>
            </Link>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}
