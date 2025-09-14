import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import styles from "../styles/usersTable.module.css";

function UsersTable() {
  return (
      <div className={styles.table_container}>
        <Paper style={{ padding: "16px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Juan Pérez</TableCell>
                <TableCell>juan@example.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>María López</TableCell>
                <TableCell>maria@example.com</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
  );
}

export default UsersTable;
