import React , {useState} from 'react'

///// import elements from material ui 
import { Grid ,Typography} from '@material-ui/core';

//// global state
import { useNews  } from '../../contexts/NewsState'

////////components 
import NewsCard from "../../components/home/newsCard/newsCard"
import HelpedSection from "../../components/home/helpedSection/helpedSection"
import Slider from "../../components/home/slider/slider"
import Header from "../../components/Header/header"
  function Home() {
    const [loading, setLoading] = useState(false);
     const news = useNews();
 
   



// ......................................................................................................


    return (
        <div>
        {/* ///////////////////////////slider////////////// */}
        <Slider/>
     {/* //////////////////////////////latest news////////// */}
        <div className="container">
              <Grid   container spacing={4}> 
              <Grid   item xs={12} sm={6} md={12} lg={12}>
                  <Header>
                    latest News
                  </Header>
              </Grid>

                {news && news.HomeItems.map((element)=>(
                  <Grid key={element.id} item xs={12} sm={6} md={4} lg={4}>
                    <NewsCard
                      element={element}
                    />
                  </Grid>
                ))}
                    
              </Grid>
          </div>
                
          <HelpedSection/>

         </div>
    )
}

export default Home
 