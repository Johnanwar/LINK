import React ,{useState , useEffect} from 'react'
import { Grid ,InputBase , IconButton , Breadcrumbs ,Typography ,Box}   from '@material-ui/core';
import { Link } from "react-router-dom"
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';

 ////////////////////components 
import Header from "../../components/Header/header"

import NewsCard from "../../components/home/newsCard/newsCard"
//// global state
import { useNews ,useDispatchNews } from '../../contexts/NewsState'
import { SORT_ACC ,SORT_DES ,FILTER_DATE , SEARCH_FILTER} from "../../contexts/types/types"

import PaginationEl from "../../components/news/Pagination/Pagination"
function News() {
    const news = useNews();
    const dispatch = useDispatchNews();

    const [Allnews, setAllNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentNews, setCurrentNews] = useState([]);
    const [newsPerPage] = useState(12);
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;

    // display dataa with pagination
    // useEffect(() => {
    //   setAllNews(news.NewItems)
    // setCurrentNews( news.NewItems.slice(indexOfFirstNews, indexOfLastNews));

    // }, [news.NewItems ,indexOfFirstNews ])
  const paginate = pageNumber => setCurrentPage(pageNumber);

////////////////////// search
const [searchKey, setSearchKey] = useState('');
  const handleSearch = e=>{
    setSearchKey(e.target.value);
    // setAllNews(news.NewItems)
   let allNewsToSearsh  = [...news.NewItems];     
   const results = allNewsToSearsh.filter(x  =>
    x.title.toLowerCase().includes(searchKey)
  );
  dispatch({
    type: SEARCH_FILTER,
    payload:results
  })
  }


   ////////////////////////// sort Data
   const sortData = e =>{
     console.log(e.target.value)
     const desData = news.NewItems
     .sort(function(a, b) {
      if(a.title.toLowerCase() > b.title.toLowerCase()) return -1;
      if(a.title.toLowerCase() < b.title.toLowerCase()) return 1;
      return 0;
     })
       if(e.target.value == "des") {
        dispatch({
          type: SORT_DES,
          payload:desData
        })
        }else{
          const accData = news.NewItems
          .sort(function(a, b) {
           if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
           if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
           return 0;
          })
        dispatch({
          type: SORT_ACC,
          payload:accData
        })
      }
}
////////////////////////////////////////////// sorrt by dateeeeeee
const [dateValues, setDateValues] = useState(
  {
    fromDate: "",
    toDate: "",
  }
);
const sortByDate = e=> {

  const { name, value } = e.target
  setDateValues({
      ...dateValues,
      [name]: value
  })

}
useEffect(() => {
  if(dateValues.fromDate !== null && dateValues.toDate !==null && dateValues.fromDate !==  "" && dateValues.toDate !== ""){
    // const newsResult= news.NewItems.filter(
    //   (obj) =>
    //   (obj.publishedAt).slice(0,10) >= dateValues.fromDate  &&  (obj.publishedAt).slice(0,10) <= dateValues.toDate
    //  )
    //  console.log(newsResult)
     dispatch({
      type: FILTER_DATE,
      payload:dateValues
    })
  }
 

}, [dateValues])



    return (
      <section className="all-news-container">
      <div className="container">
       <Breadcrumbs className="Breadcrumbs-container" aria-label="breadcrumb">
               <Link color="primary" to="/" >
                 Home
               </Link>
               <Link className="disabled-link"  color="primary" to="/News">
                News 
               </Link>
             
         </Breadcrumbs>
         <Header variant="h3">
            News 
         </Header>

        <Grid   container spacing={4}>    


        
  {/* /////////////////// search */}
  <Grid item xs={12} sm={12} md={12} lg={112}>
      <InputBase
          value={searchKey}
          // onChange={e =>setSearchKey(e.target.value)}
          onChange={handleSearch}
          placeholder="إبحث هناااا ...." />
      <IconButton>
          <SearchTwoToneIcon />
      </IconButton>
      {/* ////////////////sort A to Z//////////// */}
      <select onChange={sortData}>
            <option value="acc">A to Z</option>
            <option value="des"> Z to A </option>
      </select>
      <input onChange={sortByDate} type="date" name="fromDate"/>
      <input onChange={sortByDate} type="date" name="toDate"/>
</Grid>



         {news && news.NewItems.length>0 ?(news.NewItems.map((element)=>(
          <Grid key={element.id} item xs={12} sm={6} md={3} lg={3}>
            <NewsCard
               element={element}
            />
          </Grid>
        )) ) :("")}

        <Grid item xs={12} sm={12} md={12} lg={112}>

           <PaginationEl
            AllNews={news.length}    
            newsPerPage={newsPerPage}    
            paginate={paginate}    
           /> 
       </Grid>
       </Grid>
    
       </div>
        </section>
    )
}

export default News
