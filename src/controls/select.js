import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect,makeStyles, MenuItem, FormHelperText } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        width:'100%',
        height:"100%",
        // backgroundColor: "#fff",
    }  
}))

export default function Select(props) {
    const classes = useStyles();
    const { name, label, value, varient, onChange, options ,bgcolor , color } = props;

    return (
        <FormControl
        className={classes.root }
        style={{backgroundColor: bgcolor || "#fff"}}
            variant={varient || "outlined"}>     
            <InputLabel
           style= {{color: color || "#000"}}
            >{label}</InputLabel>
            <MuiSelect
            fullWidth= {true}
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                >
                {
                    options.map(
                        item => (
                           <MenuItem key={item.id} value={item.name}>
                                {item.name}</MenuItem>
                         )
                    )
                }
            </MuiSelect>
        </FormControl>
    )
}
