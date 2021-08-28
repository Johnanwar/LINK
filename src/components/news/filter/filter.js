import React from 'react'
import { Grid}   from '@material-ui/core';

///// import components
import FilterDate from "./FilterDate";
import FilterCategory from "./FilterCategory";
import FilterSort from "./FilterSort";
import FilterSearch from "./FilterSearch";
function Filter() {
    return (
        <>
            <Grid   container spacing={4}>    
                <FilterDate/>
                <FilterCategory/>
                <FilterSearch/>
                <FilterSort/>
                </Grid>               
            </>
    )
}

export default Filter
