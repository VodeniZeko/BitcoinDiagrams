import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import InfoChart from "./InfoChart";

import {
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "1rem 0",
  },
  Container: {
    "@media (max-width: 1150px)": {
      flexDirection: "column-reverse",
    },
  },
  Item: {
    "@media (max-width: 1150px)": {
      maxWidth: "100%",
    },
  },
  Visuals: {
    width: "50%",
  },
  LogoArea: {
    display: "flex",
    textAlign: "left",
    marginTop: " 10%",
    "@media (max-width: 1150px)": {
      margin: "0",
      display: "inline-flex",
    },
  },
  paper: {
    height: theme.spacing(16),
    textAlign: "center",
    display: "flex",
    backgroundColor: "#202c40",
    color: "#fff",
  },
}));

export default function Info({ markets }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 style={{ textAlign: "center", maxWidth: "100%" }}>
        {" "}
        Top 3 Crypto 📌{" "}
      </h1>
      <Grid className={classes.Container} container spacing={3}>
        {markets.slice(0, 3).map((i) => (
          <Grid className={classes.Item} item xs={4}>
            <Paper className={classes.paper}>
              <div className={classes.Visuals}>
                <div className={classes.LogoArea}>
                  <ListItemAvatar>
                    <Avatar
                      src={i.image}
                      style={{ scale: "0.5", marginLeft: "13px" }}
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
                          color: "#fff",
                        }}
                      >
                        ${i.current_price.toLocaleString("en-US")}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        style={{
                          color:
                            i.price_change_percentage_24h > 0
                              ? "#008000"
                              : "#ff0000",
                        }}
                      >
                        {`24h ${
                          Math.round(i.price_change_percentage_24h * 100) / 100
                        }%`}
                      </Typography>
                    }
                  />
                </div>
              </div>
              <div style={{ width: "50%" }}>
                <span style={{ marginTop: "5%" }}>7 day change</span>
                <InfoChart coinId={i.id} />
                <ListItemText
                  primary={`Vol: ${i.total_volume.toLocaleString("en-US")}`}
                />
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
