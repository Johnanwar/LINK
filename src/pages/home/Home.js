import React , {useState , useEffect ,useContext} from 'react'

///// import elements from material ui 
import { makeStyles } from '@material-ui/core/styles';
import { Grid} from '@material-ui/core';

//// global state
import { useNews  } from '../../contexts/NewsState'

////////components 
import NewsCard from "../../components/home/newsCard/newsCard"
import Nav from"../../components/nav/nav"



  function Home() {
    const [loading, setLoading] = useState(false);
     const news = useNews();
 
   



// ......................................................................................................


    return (
        <div>
         <Nav/> 
         <Grid   container spacing={4}> 
          
          {news && news.HomeItems.map((element)=>(
            <Grid key={element.id} item xs={12} sm={6} md={3} lg={3}>
              <NewsCard
                 element={element}
              />
            </Grid>
          ))}
              
         </Grid>
                
          

         </div>
    )
}

export default Home
 