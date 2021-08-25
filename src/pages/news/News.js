import React ,{useState , useEffect} from 'react'
import { Grid} from '@material-ui/core';
import NewsCard from "../../components/home/newsCard/newsCard"
//// global state
import { useNews ,useDispatchNews } from '../../contexts/NewsState'

function News() {
    const news = useNews();
    const dispatch = useDispatchNews();
    // const [page , setPage]= useState(12) 
    const [page , setPage]= useState(12)
    const inTheState = [...news.NewItems]
    
    useEffect(() => {


    }, [])

    return (
        <Grid   container spacing={4}>      
         {news && news.NewItems.map((element)=>(
          <Grid key={element.id} item xs={12} sm={6} md={3} lg={3}>
            <NewsCard
               element={element}
            />
          </Grid>
        ))}
            
       </Grid>
    )
}

export default News
