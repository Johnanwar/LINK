import React ,{useEffect , useState} from 'react'
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
        <div className="container">
             {itemDetails && 
               <div >
                   <img style={{width:"100%" , height:"500px"}} src={itemDetails.urlToImage} />
                <div className="d-flex justify-content-between">
                   <h2>
                     {itemDetails.title}
                   </h2>
                   <div>
                       <AddToWishlist element={itemDetails}/>
                       <SosialShare/>
                   </div>
                </div>
                   <p>
                       {itemDetails.content}
                   </p>
                   <p>
                       {itemDetails.content}
                   </p>  <p>
                       {itemDetails.content}
                   </p>  <p>
                       {itemDetails.content}
                   </p>
               </div>
             } 
             welcommmee
        </div>
    )
}

export default NewsDetails
