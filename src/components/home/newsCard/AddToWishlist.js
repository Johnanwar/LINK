import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { REMOVE_FROM_WISHLIST , ADD_TO_WISHLIST } from "../../../contexts/types/types"
import FavoriteIcon from '@material-ui/icons/Favorite';
//// global state
import { useNews ,useDispatchNews } from '../../../contexts/NewsState'


function AddToWishlist({element}) {
    const news = useNews();
    const dispatch = useDispatchNews();

    const handleAddToWishList = async (element) => {
        const check = news.WishList.every(item => {
            return item.id !== element.id
        })
        if(check) {
            element.checked =true
            dispatch({
                type: ADD_TO_WISHLIST,
                payload: element
              })
        }else{
            console.log("element already exist")
            element.checked =false
            dispatch({
                type: REMOVE_FROM_WISHLIST,
                payload: element
              })
        }
    
      
    }

    return (
     <IconButton onClick={() => handleAddToWishList(element)} color="secondary" aria-label="Add To Wishlist">
       
        {element.checked? (<FavoriteIcon/>):( <FavoriteBorderIcon />)}
    </IconButton>
    )
}

export default AddToWishlist
        