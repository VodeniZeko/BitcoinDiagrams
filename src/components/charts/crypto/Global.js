import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: theme.spacing(16),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Global({ global }) {
  const classes = useStyles();
  console.log(global);
  return (
    <div className={classes.root}>
      <h1 style={{ textAlign: "center" }}> Global Crypto 📌 </h1>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

// import React from "react";

// // import InfoChart from "./InfoChart";
// // import Spinner from "../../../utils/spinner";

// import { makeStyles } from "@material-ui/core/styles";
// import {
//   List,
//   ListItem,
//   ListItemText,
//   ListItemAvatar,
//   Avatar,
//   Typography,
// } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "@media (max-width: 768px)": {
//       flexDirection: "column",
//     },
//     display: "flex",
//     margin: "0 auto",
//     borderTop: ".5px solid #8c8c8c",
//     borderBottom: ".5px solid #8c8c8c",
//   },
//   Items: {
//     width: "100%",
//     borderLeft: ".5px solid #8c8c8c",
//     borderRight: ".5px solid #8c8c8c",
//     "@media (max-width: 768px)": {
//       display: "flex",
//       justifyContent: "center",
//     },
//   },
//   Text: {
//     color: "#fff",
//     textAlign: "center",
//   },
//   Visuals: {
//     height: "100%",
//     width: "100%",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-around",
//   },
//   Volume: {
//     fontWeight: "bold",
//     fontSize: ".7rem",
//     textAlign: "center",
//     "@media (max-width: 768px)": {
//       textAlign: "center",
//       fontSize: "1rem",
//     },
//   },
// }));

// export default function Global({ global }) {
//   const classes = useStyles();
//   console.log(global);
//   return (
//     <>
//       <h1 style={{ textAlign: "center" }}> Global Crypto 📌 </h1>
//       <List className={classes.root}>
//         <ListItem className={classes.Items}>
//           <div style={{ display: "flex", flexDirection: "column" }}>
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <ListItemAvatar>
//                 <Avatar style={{ scale: "0.5", marginLeft: "13px" }} />
//               </ListItemAvatar>
//               <ListItemText
//                 className={classes.Text}
//                 primary={
//                   <Typography style={{ fontWeight: "bold" }}>heloo</Typography>
//                 }
//               />
//             </div>
//             <div>
//               <ListItemText
//                 className={classes.Text}
//                 primary={
//                   <Typography
//                     style={{ fontWeight: "bold", fontSize: "1.3rem" }}
//                   >
//                     hi there
//                   </Typography>
//                 }
//                 secondary={<Typography>sup</Typography>}
//               />
//             </div>
//           </div>
//           <div className={classes.Visuals}>
//             <Typography className={classes.Volume}>Volim te</Typography>
//           </div>
//         </ListItem>
//       </List>
//     </>
//   );
// }
