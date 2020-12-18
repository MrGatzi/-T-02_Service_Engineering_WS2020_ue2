import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";

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

export default function GenderTableCell({row, name, onChange}) {
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
                    <MenuItem value={"M"}>M</MenuItem>
                    <MenuItem value={"W"}>W</MenuItem>
                    <MenuItem value={"U"}>U</MenuItem>
                </Select>
            ) : (
                row[name]
            )}
        </TableCell>
    );
};