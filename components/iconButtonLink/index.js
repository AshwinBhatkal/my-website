import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export default function IconButtonLink({ url, title, icon, useSpacing }) {
  const classes = useStyles({ useSpacing });
  return (
    <Link href={url} passHref>
      <IconButton
        color="primary"
        aria-label={title}
        // component="a"
        target="_blank"
        title={title}
      >
        <FontAwesomeIcon icon={icon} className={classes.icon} />
      </IconButton>
    </Link>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: ({ useSpacing }) => useSpacing && theme.spacing(5),
    marginLeft: ({ useSpacing }) => useSpacing && theme.spacing(1),
    marginRight: ({ useSpacing }) => useSpacing && theme.spacing(1),

    [theme.breakpoints.down("sm")]: {
      fontSize: ({ useSpacing }) => useSpacing && theme.spacing(4),
      marginLeft: ({ useSpacing }) => useSpacing && theme.spacing(0.5),
      marginRight: ({ useSpacing }) => useSpacing && theme.spacing(0.5),
    },
  },
}));
