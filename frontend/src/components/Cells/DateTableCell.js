import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker,} from '@material-ui/pickers';

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

//TODO: change to only accept Dates --> ask backend how they are represented. maybe calcuclate current date form time!

export default function DateTableCell({row, name, onChange}) {
    const classes = useStyles();
    const {isEditMode} = row;

    function changeDate(input) {
        let e = {
            target: {
                value: true,
                name: true
            }
        };
        e.target.value = input.getTime() / 1000;
        e.target.name = name;
        onChange(e, row);
    };

    function timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var time = date + ' ' + month + ' ' + year;
        return time;
    }


    return (
        <TableCell align="left" className={classes.tableCell}>
            {isEditMode ? (

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        fullWidth
                        variant="inline"
                        format="dd-MM-yyyy"
                        margin="normal"
                        value={new Date(row[name]) * 1000}
                        onChange={e => changeDate(e)}
                    />
                </MuiPickersUtilsProvider>
            ) : (
                timeConverter(row[name])
            )}
        </TableCell>
    );
};