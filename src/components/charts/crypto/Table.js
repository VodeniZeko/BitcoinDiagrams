import React from "react";

import Spinner from "../../../utils/spinner";

import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Avatar,
} from "@material-ui/core";

const columns = [
  {
    id: "market_cap_rank",
    label: "#",
    align: "right",
  },
  {
    id: "image",
    label: "Coins",
    align: "right",
    format: (value) => (
      <Avatar
        style={{ backgroundColor: "#fff", scale: "0.7" }}
        alt={value}
        src={value}
      />
    ),
  },
  {
    id: "name",
    label: "",
    align: "left",
  },
  {
    id: "current_price",
    label: "Price 💵",
    align: "left",
    format: (value) => `$ ${value.toLocaleString("en-US")}`,
  },
  {
    id: "circulating_supply",
    label: "Circulating Supply",
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "total_supply",
    label: "Total Supply",
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "market_cap",
    label: "Market Cap",
    align: "left",
    format: (value) => `$ ${value.toLocaleString("en-US")}`,
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#202c40",
    margin: "0 auto",
  },
  tableHead: {
    color: "#fff",
    backgroundColor: " #272a39",
    fontSize: "1rem",
    height: "40px",
  },
  container: {
    maxHeight: 640,
  },
  tableCell: {
    color: "#fff",
  },
});

export default function StickyHeadTable({ markets }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div style={{ padding: "1rem 0" }}>
      <h1 style={{ textAlign: "center" }}> Top 100 Crypto 📌 </h1>
      <Paper className={classes.root}>
        {markets ? (
          <TableContainer className={classes.container}>
            {markets && (
              <Table stickyHeader size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell key={column.id} className={classes.tableHead}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody loading={true}>
                  {markets
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow hover key={row.id}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell
                                className={classes.tableCell}
                                key={column.id}
                              >
                                {column.format && value !== null
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            )}
          </TableContainer>
        ) : (
          <Spinner />
        )}
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          className={classes.tableCell}
          component="div"
          count={markets.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
