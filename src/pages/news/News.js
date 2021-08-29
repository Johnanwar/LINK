import React ,{useState ,useEffect } from 'react'
import { Grid , Breadcrumbs , Box , Typography}   from '@material-ui/core';
import { Link } from "react-router-dom"
 ////////////////////components 
import Header from "../../components/Header/header"
import Filter from "../../components/news/filter/filter"

import NewsCard from "../../components/home/newsCard/newsCard"
//// global state
import {PAGINATE_ITEMS } from "../../contexts/types/types"
import { useNews ,useDispatchNews } from '../../contexts/NewsState'

import PaginationEl from "../../components/news/Pagination/Pagination"
function News() {
    const news = useNews();
    const dispatch = useDispatchNews();

    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage] = useState(12);
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;

    // display dataa with pagination
     useEffect(() => {
     const paginationData = news.NewItems.slice(indexOfFirstNews, indexOfLastNews);
       dispatch({
        type: PAGINATE_ITEMS,
        payload:paginationData
      })
     }, [news.NewItems ,indexOfFirstNews ])
  const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
      <section className="all-news-container">
        <Box className="container">
          <Breadcrumbs className="Breadcrumbs-container" aria-label="breadcrumb">
                  <Link color="primary" to="/" >
                    Home
                  </Link>
                  <Link className="disabled-link"  color="primary" to="/News">
                    News 
                  </Link>
                
          </Breadcrumbs>
          <Header>
                  News 
          </Header>
          <Grid   container spacing={4}>       
                 <Grid item xs={12} sm={12} md={12} lg={12}>
                       <Filter/>
                  </Grid>
          {news && news.filteredItems.length>0 ?( news.filteredItems.map((element)=>(
            <Grid key={element.id} item xs={12} sm={6} md={3} lg={3}>
              <NewsCard
                element={element}
              />
            </Grid>
          )) ) :(
            <Box
             style={{height:"30vh"}}
             display="flex"  textAlign="center" justifyContent="center"  alignItems="center"> 
               <Typography textAlign="center" color="primary"  gutterBottom variant="h6" component="h2">
                 No Data Found 
              </Typography>
              
             </Box>
            )}

               <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Box display="flex" justifyContent="center" my="3rem" alignItems="center">
                    <PaginationEl
                      AllNews={news.length}    
                      newsPerPage={newsPerPage}    
                      paginate={paginate}    
                    /> 
                  </Box>
           </Grid>
      
        </Grid>
      
        </Box>
        </section>
    )
}

export default News
