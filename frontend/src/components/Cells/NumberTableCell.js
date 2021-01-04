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

//TODO: change to only accept numbers !

export default function NumberTableCell({row, name, onChange}) {
    const classes = useStyles();
    const {isEditMode} = row;

    function changeNumber(input) {
        input.target.value = input.target.value * 31536000
        onChange(input, row);
    };
    return (
        <TableCell align="left" className={classes.tableCell}>
            {isEditMode ? (
                <Input
                    value={Math.floor(row[name] / 31536000)}
                    name={name}
                    type="number"
                    onChange={e => changeNumber(e , row)}
                    className={classes.input}
                />
            ) : (
                Math.floor(row[name] / 31536000)
            )}
        </TableCell>
    );
};
