import React from "react";

import { GridList, Paper, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    width: "100%",
    margin: "0",
    height: "180px",
  },
  paper: {
    margin: theme.spacing(1),
    textAlign: "center",
    borderRadius: "5%",
    backgroundColor: "#202c40",
    minWidth: "200px",
    maxHeight: "30%",
  },
  primary: {
    color: "#fff",
  },
  secondary: {
    color: "#b6cbff",
  },
}));

export default function Global({ global }) {
  const classes = useStyles();

  return (
    <>
      <h1 style={{ textAlign: "center" }}> Global Crypto Market 📌 </h1>
      <div className={classes.root}>
        {global.data ? (
          <GridList className={classes.gridList} cols={2.5}>
            <Paper className={classes.paper}>
              <Typography className={classes.primary}>
                Active Cryptocurrencies:
              </Typography>
              <Typography className={classes.secondary}>
                {global.data.active_cryptocurrencies.toLocaleString("en-US")}
              </Typography>
            </Paper>

            <Paper className={classes.paper}>
              <Typography className={classes.primary}>
                Total Market Cap:
              </Typography>
              <Typography className={classes.secondary}>
                $ {global.data.total_market_cap.usd.toLocaleString("en-US")}
              </Typography>
            </Paper>

            <Paper className={classes.paper}>
              <Typography className={classes.primary}>Total Volume:</Typography>
              <Typography className={classes.secondary}>
                $ {global.data.total_volume.usd.toLocaleString("en-US")}
              </Typography>
            </Paper>

            <Paper className={classes.paper}>
              <Typography className={classes.primary}> Markets:</Typography>
              <Typography className={classes.secondary}>
                {global.data.markets.toLocaleString("en-US")}
              </Typography>
            </Paper>
          </GridList>
        ) : (
          <h3 style={{ textAlign: "center" }}>Loading data..</h3>
        )}
      </div>
    </>
  );
}
