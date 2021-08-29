import React , {useState} from 'react'
import { Grid}   from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
 //// global state
import {useNews,useDispatchNews } from '../../../contexts/NewsState'
import {SEARCH_FILTER } from "../../../contexts/types/types"

function FilterSearch() {
     const dispatch = useDispatchNews();
     const news = useNews();

    const [searshInput , setSearshInput] = useState(false)

     const handleSearch = e=>{
      setSearshInput(e.target.value)
      dispatch({
        type: SEARCH_FILTER,
        payload:e.target.value
      })
     }
     const handleSerashSubmit = e=>{
      dispatch({
        type: SEARCH_FILTER,
        payload:searshInput
      })
     }
     
// asian

    return (
        <>
          <Grid item xs={12} sm={6} md={4} lg={4}>
              <form className="d-flex form-searsh">
              <input onChange={handleSearch} className="input-date"  placeholder="Search Services" type="text"/>
                  {/* <button onClick={(e)=>( e.preventDefault())}> */}
                  <button onClick={handleSerashSubmit}>
                    <SearchIcon/>
                </button>
            </form>
              
          </Grid>
        </>
    )
}

export default FilterSearch
