import React  from 'react'
import { Grid}   from '@material-ui/core';
import Select from "../../../controls/select"
//// global state
import { useNews, useDispatchNews } from '../../../contexts/NewsState'
import {SORT_ACC , SORT_DES } from "../../../contexts/types/types"

function FilterSort() {
     const dispatch = useDispatchNews();
     const news = useNews();
     const sort=[
      {id:"A to Z", name:"A to Z"},
      {id: "Z to A", name:"Z to A"},
     ]
     const sortData = e =>{ 

        if(e.target.value == "Z to A") {
          const desData = news.NewItems
          .sort(function(a, b) {
           if(a.title > b.title) return -1;
           else {
            return 1;
           } 
           })
         dispatch({
           type: SORT_DES,
           payload:desData
         })
         }
         else if(e.target.value == "A to Z"){
          const accData = news.NewItems
          .sort(function(a, b) {
            if(a.title > b.title) return 1;
           else {
            return -1;
           } 
           })
         dispatch({
           type: SORT_ACC,
           payload:accData
         })
       }
     }
 

    
  
    return (
        <>
       <Grid item xs={12} sm={6} md={2} lg={2}>
        <Select
                    label=  'Sort'
                    name="Sort"
                    onChange={sortData}
                    options={sort}
                    bgcolor="transparent"
                    color="#13BEFF"

        />
      </Grid>
        </>
    )
}

export default FilterSort
