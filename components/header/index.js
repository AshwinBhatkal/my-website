import { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Close, Menu } from "@material-ui/icons";
import NavList from "../navList";

export default function Header() {
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
              <Typography variant="h6">ASHWIN BHATKAL</Typography>
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
                      <NavList isMobile/>
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
