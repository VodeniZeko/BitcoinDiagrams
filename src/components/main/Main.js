import React from "react";
import clsx from "clsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Top from "../top";
import Crypto from "../charts/crypto";
import RealEstate from "../charts/realEstate";
import Countries from "../charts/countries";
import Stocks from "../charts/stocks";
import NoMatch from "../noMatch";
import Footer from "../footer";

import {
  Drawer,
  AppBar,
  List,
  CssBaseline,
  Typography,
  IconButton,
  ListItemText,
  ListItem,
  Fade,
  Tooltip,
} from "@material-ui/core";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import PollOutlinedIcon from "@material-ui/icons/PollOutlined";
import TimelineOutlinedIcon from "@material-ui/icons/TimelineOutlined";
import PublicOutlinedIcon from "@material-ui/icons/PublicOutlined";
import HomeWorkOutlinedIcon from "@material-ui/icons/HomeWorkOutlined";

import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    backgroundColor: " #1a1c29",
  },
  drawerOpen: {
    width: drawerWidth,
    display: "flex",
    justifyContent: "space-between",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: " #1a1c29",
  },
  drawerClose: {
    display: "flex",
    textAlign: "center",
    justifyContent: "space-between",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
    backgroundColor: " #1a1c29",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",

    justifyContent: "flex-start",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    backgroundColor: " #1a1c29",
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: "80vw",
    maxWidth: "1050px",
    backgroundColor: " #1a1c29",
    "@media (max-width: 500px)": {
      width: "100vw",
    },
  },
  listItem: {
    display: "flex",
    width: "200px",
    color: " #fff",
  },
  navText: {
    marginLeft: "20%",
    textDecoration: "none",
    color: "#fff",
  },
}));

export default function Main() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      ></AppBar>
      <Router>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <List component="nav" aria-label="main navigation icons">
            <NavLink to="/">
              <ListItem
                className={classes.listItem}
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
                button
              >
                <Tooltip
                  title="BTC/Crypto"
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 600 }}
                  placement="right"
                  arrow
                >
                  <PollOutlinedIcon fontSize="large" />
                </Tooltip>

                <ListItemText
                  primary={
                    <Typography className={classes.navText}>
                      BTC/Crypto
                    </Typography>
                  }
                />
              </ListItem>
            </NavLink>

            <NavLink to="/real-estate">
              <ListItem
                className={classes.listItem}
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
                button
              >
                <Tooltip
                  title="BTC/Real Estate"
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 600 }}
                  placement="right"
                  arrow
                >
                  <HomeWorkOutlinedIcon fontSize="large" />
                </Tooltip>

                <ListItemText
                  primary={
                    <Typography className={classes.navText}>
                      BTC/Real Estate
                    </Typography>
                  }
                />
              </ListItem>
            </NavLink>

            <NavLink to="/stocks">
              <ListItem
                className={classes.listItem}
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
                button
              >
                <Tooltip
                  title="BTC/Stocks"
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 600 }}
                  placement="right"
                  arrow
                >
                  <TimelineOutlinedIcon fontSize="large" />
                </Tooltip>

                <ListItemText
                  primary={
                    <Typography className={classes.navText}>
                      BTC/Stocks
                    </Typography>
                  }
                />
              </ListItem>
            </NavLink>

            <NavLink to="/countries">
              <ListItem
                className={classes.listItem}
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
                button
              >
                <Tooltip
                  title="BTC/Countries"
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 600 }}
                  placement="right"
                  arrow
                >
                  <PublicOutlinedIcon fontSize="large" />
                </Tooltip>

                <ListItemText
                  primary={
                    <Typography className={classes.navText}>
                      BTC/Countries
                    </Typography>
                  }
                />
              </ListItem>
            </NavLink>
          </List>

          <div className={classes.toolbar}>
            <IconButton onClick={() => setOpen(!open)}>
              {open ? (
                <NavigateBefore style={{ color: " #fff" }} fontSize="large" />
              ) : (
                <NavigateNextIcon style={{ color: " #fff" }} fontSize="large" />
              )}
            </IconButton>
          </div>
        </Drawer>

        {/* Content Bellow  */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ backgroundColor: "#1a1c29" }}>
            <Top />
          </div>
          <div className={classes.content}>
            <Switch>
              <Route exact path="/">
                <Crypto />
              </Route>
              <Route path="/real-estate">
                <RealEstate />
              </Route>
              <Route path="/stocks">
                <Stocks />
              </Route>
              <Route path="/countries">
                <Countries />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </div>
          <div style={{ backgroundColor: "#1a1c29" }}>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}
