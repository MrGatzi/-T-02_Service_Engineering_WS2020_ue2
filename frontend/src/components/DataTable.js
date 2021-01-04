import React, {useEffect, useState, Component} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DataRow from "./DataRow";
import Typography from "@material-ui/core/Typography";
import axios from '../utils/axios';
import {useSnackbar} from "notistack";
import {useData} from "../context/data";

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


export default function DataTable() {
    const classes = useStyles();
    const {data, getPatientData} = useData();
    const [rows, setRows] = React.useState([]);
    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        setRows([]);
        setRows(data);
    }, [data]);

    return (
        <Paper className={classes.root}>
            <Typography variant="h6" component="h2">
                DataSet:
            </Typography>
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
