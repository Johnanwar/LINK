import React ,{useState , useEffect} from 'react'
import { Grid}   from '@material-ui/core';
//// global state
import { useDispatchNews } from '../../../contexts/NewsState'
import {FILTER_DATE } from "../../../contexts/types/types"

function FilterDate() {
   const dispatch = useDispatchNews();
   const [dateValues, setDateValues] = useState(
    {
      fromDate: "",
      toDate: "",
    } );
  const sortByDate = e=> {
    const { name, value } = e.target
    setDateValues({
        ...dateValues,
        [name]: value
    })
  }
  useEffect(() => {
    if(dateValues.fromDate !== null && dateValues.toDate !==null && dateValues.fromDate !==  "" && dateValues.toDate !== ""){
       dispatch({
        type: FILTER_DATE,
        payload:dateValues
      })
    }
   
  }, [dateValues])
    return (
        <>
            <Grid item xs={12} sm={6} md={2} lg={2}>
                <input className="input-date" onChange={sortByDate} type="date" name="fromDate"/>
           </Grid>
            <Grid item xs={12} sm={6} md={2} lg={2}>
                <input className="input-date" onChange={sortByDate} type="date" name="toDate"/>
            </Grid>
        </>
    )
}

export default FilterDate
