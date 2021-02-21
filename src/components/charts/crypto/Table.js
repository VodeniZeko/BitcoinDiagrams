import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import Spinner from "../../../utils/spinner";

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
    label: "(Top 100)",
    align: "left",
  },
  {
    id: "current_price",
    label: "Price",
    align: "left",
    format: (value) => `💵 ${value.toLocaleString("en-US")}`,
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
    format: (value) => `💵 ${value.toLocaleString("en-US")}`,
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "transparent",
    maxWidth: "60vw",
    margin: "0 auto",
  },
  tableHead: {
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#191919",
    maxWidth: "60vw",
  },
  container: {
    maxHeight: 640,
    maxWidth: "60vw",
  },
  tableCell: {
    color: "#fff",
    maxWidth: "60vw",
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
    <Paper className={classes.root}>
      {markets ? (
        <TableContainer className={classes.container}>
          {markets && (
            <Table stickyHeader aria-label="sticky table">
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
  );
}
