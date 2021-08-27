import { GET_NEWS ,GET_CATEGORY, REMOVE_FROM_WISHLIST , ADD_TO_WISHLIST  ,SORT_ACC , SORT_DES , FILTER_DATE ,SEARCH_FILTER} from "../types/types"

export const reducer = (state, action) => {
  switch (action.type) {  
       /////////////////////////////////////////////////////////////////////////
       case GET_CATEGORY:
        return {
          ...state,
          category:[...action.payload]
        }
           ///////////////////////////////////////////////////////////////////////////////////////

      case GET_NEWS:
      var HomeArray = [] 
      action.payload.forEach((item) => {
        if(item.showOnHomepage === true){
          HomeArray.push(item)
        }
      })
      // var catArray = [] 
      // action.payload.forEach((item) => {
      //   if(item.sourceID == state.category.id){
      //     item.cat = state.category.name;
      //     catArray.push(item)
      //   }
      // })
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

       /////////////////////////////////////////////////////////////
       case SORT_ACC:         
        return {
          ...state,
          NewItems:action.payload
        }

      /////////////////////////////////////////////////////////////
       case SORT_DES:       
        return {
          ...state,
          NewItems:action.payload
        }

          /////////////////////////////////////////////////////////////
       case FILTER_DATE:  
        const filterDateResult= state.NewItems.filter(
          (obj) =>
          (obj.publishedAt).slice(0,10) >= action.payload.fromDate  &&  (obj.publishedAt).slice(0,10) <= action.payload.toDate
         )    
        
       return {
         ...state,
         NewItems:filterDateResult
       }

       /////////////////////////////////////////////////////////////
       case SEARCH_FILTER:         
        return {
          ...state,
          NewItems:action.payload
        }
     
    default:
      return state 
  }
}