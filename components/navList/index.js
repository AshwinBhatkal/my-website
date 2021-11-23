import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import Link from "next/link";

export default function NavList({ isMobile }) {
  const menuItems = [
    {
      title: "HOME",
      path: "/",
    },
    {
      title: "ABOUT",
      path: "/about",
    },
    // {
    //   title: "EXPLORE",
    //   path: "/explore",
    // },
    {
      title: "CONTACT",
      path: "/contact",
    },
  ];

  const CustomListItem = React.forwardRef(({ onClick, href, item }, ref) => {
    return (
      <ListItem button component={"a"} href={href} onClick={onClick} ref={ref}>
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
