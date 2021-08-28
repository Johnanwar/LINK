import React from 'react'
import { Grid}   from '@material-ui/core';
import Select from "../../../controls/select"
//// global state
import { useNews, useDispatchNews } from '../../../contexts/NewsState'
import {FILTER_CATEGORY } from "../../../contexts/types/types"

function FilterCategory() {
     const dispatch = useDispatchNews();
     const news = useNews();

     const sortCategory = e=> {
      console.log(e.target.value)
      if(e.target.value !== null  && e.target.value !== ""){
        dispatch({
          type: FILTER_CATEGORY,
          payload:e.target.value 
        })
      }
      
    }
    return (
        <>
          <Grid item xs={12} sm={6} md={2} lg={2}>
           <Select
                label=  'Category'
                name="Category"
                onChange={sortCategory}
                options={news.category}

            />
          </Grid>
        </>
    )
}

export default FilterCategory
