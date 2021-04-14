import { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  makeStyles,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Close, Menu } from "@material-ui/icons";
import NavList from "../navList";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  logo: {
    cursor: "pointer",
    transform: "skewX(0deg)",
    transition: "transform 1s",

    "&:hover": {
      color: theme.palette.primary.main,
      transform: "skewX(-15deg)",
    },
    letterSpacing: theme.spacing(0.875),
    fontWeight: 100,
  },
  surName: {
    fontWeight: 500,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("xs"));

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar color="inherit">
        <Toolbar>
          <Container maxWidth="lg">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Link href="/">
                <Typography variant="h6" className={classes.logo}>
                  ASHWIN&nbsp;
                  <span className={classes.surName}>BHATKAL</span>
                </Typography>
              </Link>
              {isMobile ? (
                <Box>
                  <IconButton onClick={toggleDrawer(true)}>
                    <Menu />
                  </IconButton>
                  <SwipeableDrawer
                    anchor={"right"}
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                  >
                    <Box
                      width={250}
                      role="presentation"
                      onClick={toggleDrawer(false)}
                      onKeyDown={toggleDrawer(false)}
                    >
                      <IconButton onClick={toggleDrawer(true)}>
                        <Close />
                      </IconButton>
                      <NavList isMobile />
                    </Box>
                  </SwipeableDrawer>
                </Box>
              ) : (
                <NavList />
              )}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
