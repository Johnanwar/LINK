import React from 'react'
import { Grid}   from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
 //// global state
import {useDispatchNews } from '../../../contexts/NewsState'
import {SEARCH_FILTER } from "../../../contexts/types/types"

function FilterSearch() {
     const dispatch = useDispatchNews();
     const handleSearch = e=>{
      dispatch({
        type: SEARCH_FILTER,
        payload:e.target.value
      })
     }
    return (
        <>
          <Grid item xs={12} sm={6} md={4} lg={4}>
              <form className="d-flex form-searsh">
              <input onChange={handleSearch} className="input-date"  placeholder="Search Services" type="text"/>
                  <button>
                    <SearchIcon/>
                </button>
            </form>
              
          </Grid>
        </>
    )
}

export default FilterSearch
