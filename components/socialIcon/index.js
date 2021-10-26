import { IconButton, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export default function SocialIcon({ social }) {
  const classes = useStyles();
  return (
    <Link href={social.url} target="#">
      <IconButton aria-label={social.label}>
        <social.icon fontSize="large" className={classes.social} />
      </IconButton>
    </Link>
  );
}

const useStyles = makeStyles((theme) => ({
  social: {
    color: theme.palette.common.black,
  },
}));
