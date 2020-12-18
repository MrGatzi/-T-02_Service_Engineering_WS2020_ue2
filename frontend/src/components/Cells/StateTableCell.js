import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

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

export default function StateTableCell({row, name, onChange}) {
    const classes = useStyles();
    const {isEditMode} = row;
    return (
        <TableCell align="left" className={classes.tableCell}>
            {isEditMode ? (
                <Select
                    value={row[name]}
                    name={name}
                    onChange={e => onChange(e, row)}
                    className={classes.input}
                >
                    <MenuItem value={"Oberösterreich"}>Oberösterreich</MenuItem>
                    <MenuItem value={"Wien"}>Wien</MenuItem>
                    <MenuItem value={"Niederösterreich"}>Niederösterreich</MenuItem>
                    <MenuItem value={"Burgenland"}>Burgenland</MenuItem>
                    <MenuItem value={"Steiermark"}>Steiermark</MenuItem>
                    <MenuItem value={"Kärnten"}>Kärnten</MenuItem>
                    <MenuItem value={"Tirol"}>Tirol</MenuItem>
                    <MenuItem value={"Salzburg"}>Salzburg</MenuItem>
                    <MenuItem value={"Vorarlberg"}>Vorarlberg</MenuItem>
                </Select>
            ) : (
                row[name]
            )}
        </TableCell>
    );
};