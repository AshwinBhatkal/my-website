import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Person, Search } from "@material-ui/icons";
import Link from "next/link";

export default function NavList({ isMobile }) {
  const menuItems = [
    {
      title: "ABOUT",
      icon: <Person />,
      path: "/about",
    },
    {
      title: "EXPLORE",
      icon: <Search />,
      path: "/explore",
    },
    {
      title: "CONTACT",
      icon: <Search />,
      path: "/about/#contact",
    },
  ];

  const CustomListItem = React.forwardRef(({ onClick, href, item }, ref) => {
    return (
      <ListItem button component={"a"} href={href} onClick={onClick} ref={ref}>
        {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
        <ListItemText primary={item.title} />
      </ListItem>
    );
  });

  return (
    <nav
      style={{
        display: `${isMobile ? "block" : "flex"}`,
      }}
    >
      {menuItems.map((item) => (
        <Link key={item.title} href={item.path} passHref>
          <CustomListItem item={item} />
        </Link>
      ))}
    </nav>
  );
}
