import React from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import {
  Close,
  Inbox,
  Mail,
  Menu,
  Person,
  Phone,
  Search,
} from "@material-ui/icons";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const menuItems = [
    {
      title: "About Me",
      icon: <Person />,
      path: "/about",
    },
    {
      title: "Explore",
      icon: <Search />,
      path: "/explore",
    },
  ];
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

  const CustomLI = React.forwardRef(({ onClick, href, item }, ref) => {
    return (
      <ListItem button component={"a"} href={href} onClick={onClick} ref={ref}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItem>
    );
  });

  const NavList = () => (
    <nav
      style={{
        display: `${isMobile ? "block" : "flex"}`,
      }}
    >
      {menuItems.map((item, index) => (
        <Link key={item.title} href={item.path} passHref>
          <CustomLI item={item} />
        </Link>
      ))}
    </nav>
  );

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
                      <NavList />
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
