import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DataRow from "./DataRow";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing(3),
        overflowX: "auto"
    },
    table: {
        minWidth: 650
    },
    selectTableCell: {
        width: 60
    },
    tableCell: {
        width: 130,
        height: 40
    },
    input: {
        width: 130,
        height: 40
    }
}));

const createData = (id, dateinfect, dateend, age, gender, precond, district, state) => ({
    id: id,
    dateinfect,
    dateend,
    age,
    gender,
    precond,
    district,
    state,
    isEditMode: false
});

export default function DataTable() {
    const classes = useStyles();
    const [rows, setRows] = React.useState([
        createData(1, 2, 3, 4, "U", 6, 7, "Oberösterreich"),
        createData(1, 2, 3, 4, "M", 6, 7, "Niederösterreich"),
        createData(1, 2, 3, 4, "W", 6, 7, "Wien"),
    ]);

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Datum Infektion</TableCell>
                        <TableCell align="left">Datum Ende</TableCell>
                        <TableCell align="left">Alter</TableCell>
                        <TableCell align="left">Geschlecht</TableCell>
                        <TableCell align="left">Vorerkrankung</TableCell>
                        <TableCell align="left">Bezirk</TableCell>
                        <TableCell align="left">Bundesland</TableCell>
                        <TableCell align="left"/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <DataRow data={row}/>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
