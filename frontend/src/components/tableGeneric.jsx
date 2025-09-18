import React from "react";
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";
import styles from "../styles/tableGeneric.module.css";

function GenericTable({ columns, data }) {
  return (
    <div>
    <div className={styles.table_container}>
      <Paper style={{ padding: "16px", width: "100%", overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col}>{col}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, idx) => (
              <TableRow key={idx}>
                {columns.map((col) => (
                  <TableCell key={col}>{row[col]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
    </div>
  );
}

export default GenericTable;
