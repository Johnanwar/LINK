import { GET_NEWS , REMOVE_FROM_WISHLIST , ADD_TO_WISHLIST } from "../types/types"

export const reducer = (state, action) => {
  switch (action.type) {  
    case GET_NEWS:
      var HomeArray = [] 
      action.payload.forEach((item) => {
        if(item.showOnHomepage === true){
          HomeArray.push(item)
        }
      })
      return{
        ...state,
        NewItems: [...action.payload],
        length:action.payload.length,
        HomeItems:HomeArray,
      } 
      /////////////////////////////////////////////////////////////////////////
      case ADD_TO_WISHLIST:
        const newsResult = state.NewItems.filter(
          (item) => item.id !== action.payload.id)
        return {
          ...state,
          WishList: [...state.WishList, action.payload],
          NewItems: [...newsResult, action.payload],
        }

         ///////////////////////////////////////////////////////////////////////////////////////

      case REMOVE_FROM_WISHLIST: {
        const result = state.WishList.filter(
          (item) => item.id !== action.payload.id)
          const newsResult = state.NewItems.filter(
            (item) => item.id !== action.payload.id)
        return {
          ...state,
          WishList: result,     
          NewItems: [...newsResult, action.payload],        
         };
       }
 
     
    default:
      return state 
  }
}