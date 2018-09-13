import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";

const SideDrawer = ({ open, onClose }) => {
  const scrollToElement = (elements, offset) => {
    scroller.scrollTo(elements, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: offset ? offset : -100
    });
    onClose(false);
  };
  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      <List component="nav">
        <ListItem button onClick={() => scrollToElement("featured", 0)}>
          Event Starts In
        </ListItem>
        <ListItem button onClick={() => scrollToElement("venueinfo", -82)}>
          Venue Info
        </ListItem>
        <ListItem button onClick={() => scrollToElement("highlights", -130)}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => scrollToElement("pricing", -82)}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => scrollToElement("location", -82)}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
