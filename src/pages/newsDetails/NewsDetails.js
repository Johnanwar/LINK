import React ,{useEffect , useState} from 'react'
import {Breadcrumbs ,Typography ,Box } from '@material-ui/core';
import { Link } from "react-router-dom"

 ////////////////////components 
import Header from "../../components/Header/header"
//// global state
import { useNews  } from '../../contexts/NewsState'
import AddToWishlist from "../../components/home/newsCard/AddToWishlist"
import SosialShare from "../../components/home/newsCard/SosialShare"



function NewsDetails({match}) {
    const news = useNews();
    const [itemDetails , setItemDetails] = useState({})
    
    useEffect(() => {
    if(news.NewItems){
        news.NewItems.map((item) => {
            if(item.id == match.params.id){
                setItemDetails(item) 
            }
        })
    }
    }, [news])

    
    return (
        <article className="product-detail-container">
           <div className="container">
            <Breadcrumbs className="Breadcrumbs-container" aria-label="breadcrumb">
                    <Link color="primary" to="/" >
                      Home
                    </Link>
                    <Link color="primary" to="/News">
                    News 
                    </Link>
                    <Link className="disabled-link" >
                        News Details
                    </Link>
              </Breadcrumbs>
              <Header variant="h3">
                 News Details
              </Header>
                {itemDetails && 
                    <Box className="card-details-container">
                    <img src={itemDetails.urlToImage} />
                            <Box className="card-details-content">
                                <Typography className="category-details" variant="body2" color="textSecondary" component="p">
                                  {itemDetails.cat}
                               </Typography>
                                <Box display="flex" alignItems="center" className="justify-content-between article-details-header">
                                <Typography  variant="h4" gutterBottom  component="h4">
                                    {itemDetails.title}
                                </Typography>
                                <Box display="flex" className="article-details-links">
                                    <AddToWishlist element={itemDetails}/>
                                    <SosialShare/>
                                </Box>
                                </Box>
                                <Typography gutterBottom className="category-details" variant="body2" color="textSecondary" component="p">
                                  {itemDetails.content}
                               </Typography>
                               <Typography gutterBottom className="category-details" variant="body2" color="textSecondary" component="p">
                                  {itemDetails.content}
                               </Typography>
                               <Typography gutterBottom className="category-details" variant="body2" color="textSecondary" component="p">
                                  {itemDetails.content}
                               </Typography>
                               <Typography gutterBottom className="category-details" variant="body2" color="textSecondary" component="p">
                                  {itemDetails.content}
                               </Typography>
                               <Typography gutterBottom className="category-details" variant="body2" color="textSecondary" component="p">
                                  {itemDetails.content}
                               </Typography>
                               <Typography gutterBottom className="category-details" variant="body2" color="textSecondary" component="p">
                                  {itemDetails.content}
                               </Typography>
                               <Typography gutterBottom className="category-details" variant="body2" color="textSecondary" component="p">
                                  {itemDetails.content}
                               </Typography>
                              
                            </Box>
                    </Box>
                } 
                
             </div>
        </article>
    )
}

export default NewsDetails
