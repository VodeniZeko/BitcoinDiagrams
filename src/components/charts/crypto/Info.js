import React from "react";

import InfoChart from "./InfoChart";

import {
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  GridList,
  Paper,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "3rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  paper: {
    backgroundColor: "#202c40",
    display: "flex",
    margin: "1rem",
    color: "#fff",
    borderRadius: "5%",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  visuals: {
    width: "160px",
    textAlign: "center",
    marginTop: "1rem",
    "@media (max-width: 900px)": {
      height: "290px",
    },
  },
  logoArea: {
    display: "flex",
    textAlign: "left",
    marginTop: " 10%",
  },
}));

export default function Info({ markets }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 style={{ textAlign: "center", maxWidth: "100%" }}>
        {" "}
        Top 10 Coins 📌{" "}
      </h1>
      <GridList className={classes.gridList} cols={2.5}>
        {markets.slice(0, 10).map((i) => (
          <Paper key={i.id} className={classes.paper}>
            <div className={classes.visuals}>
              <div className={classes.logoArea}>
                <ListItemAvatar>
                  <Avatar
                    src={i.image}
                    style={{
                      backgroundColor: "#272a39",
                      marginLeft: "13px",
                    }}
                  />
                </ListItemAvatar>
                <ListItemText
                  style={{
                    color: "#fff",
                  }}
                  primary={`${i.symbol.toUpperCase()}/USDT`}
                />
              </div>
              <div>
                <ListItemText
                  primary={
                    <Typography
                      style={{
                        fontSize: "1.5rem",
                        color: "#b6cbff",
                      }}
                    >
                      $ {i.current_price.toLocaleString("en-US")}
                    </Typography>
                  }
                  secondary={
                    <>
                      <span
                        style={{
                          color: "#e1e1e1",
                          fontWeight: "lighter",
                        }}
                      >
                        24h
                      </span>
                      <span
                        style={{
                          color:
                            i.price_change_percentage_24h > 0
                              ? "#61bf8a"
                              : "#ff8e8e",
                        }}
                      >
                        {" "}
                        {` ${
                          Math.round(i.price_change_percentage_24h * 100) / 100
                        }%`}
                      </span>
                    </>
                  }
                />
              </div>
            </div>
            <div className={classes.visuals}>
              <span>7 day change</span>
              <InfoChart coinId={i.id} />
              <ListItemText
                primary={
                  <Typography
                    style={{
                      color: "#e1e1e1",
                      fontSize: ".9rem",
                      fontWeight: "lighter",
                    }}
                  >
                    Vol: ${i.total_volume.toLocaleString("en-US")}
                  </Typography>
                }
              />
            </div>
          </Paper>
        ))}
      </GridList>
    </div>
  );
}
