import React from 'react'
import {  makeStyles, Typography} from '@material-ui/core';
 
const useStyles = makeStyles(theme => ({
    root: {

        margin: "20px 0",
        paddingBottom:'5px',
        fontWeight:'600',
    }
}))

function Header(props) {
    const classes = useStyles();

    const { variant,children } = props;
    return (
         <Typography
        className={classes.root}
           variant={variant || "h4"}
         >
              {children}
        </Typography>
     )
}

export default Header
