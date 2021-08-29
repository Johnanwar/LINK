import { GET_NEWS ,GET_CATEGORY, REMOVE_FROM_WISHLIST , ADD_TO_WISHLIST  ,SORT_ACC , SORT_DES , FILTER_DATE ,SEARCH_FILTER , PAGINATE_ITEMS ,  FILTER_CATEGORY} from "../types/types"

export const reducer = (state, action) => {
  switch (action.type) {  
       //////////////////////////////////////////////////////////////////GET_CATEGORY
       case GET_CATEGORY:
        return {
          ...state,
          category:[...action.payload]
        }
     ///////////////////////////////////////////////////////////////////GET_NEWS
      case GET_NEWS:
      let HomeArray = [] 
      action.payload.forEach((item) => {
        if(item.showOnHomepage === true){
          HomeArray.push(item)
        }
      })
      return{
        ...state,
        filteredItems:  action.payload, 
        NewItems:  action.payload,
        length:action.payload.length,
        HomeItems:HomeArray,
      }   
      /////////////////////////////////////////////////////////// ADD_TO_WISHLIST
      case ADD_TO_WISHLIST:
        const newsResult = state.NewItems.filter(
          (item) => item.id !== action.payload.id)
        return {
          ...state,
          WishList: [...state.WishList, action.payload],
          // NewItems: [...newsResult, action.payload], 
          // filteredItems: [...newsResult, action.payload],
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
          // NewItems: [...newsResult, action.payload],        
         };
       }
         ////////////////////////////////////////////////////// SORT_ACC
        case SORT_ACC: {
        const result = state.WishList.filter(
          (item) => item.id !== action.payload.id)
          const newsResult = state.NewItems.filter(
            (item) => item.id !== action.payload.id)
        return {
          ...state,
          WishList: result,     
          NewItems: [...newsResult, action.payload],    
          // filteredItems: [...newsResult, action.payload],

         };
       }
       ///////////////////////////////////////////////////////////// SORT_ACC
       case SORT_ACC:         
        return {
          ...state,
          NewItems:action.payload,
          filteredItems:action.payload,
        }

      ///////////////////////////////////////////////////////////// SORT_DES
       case SORT_DES:       
        return {
          ...state,
          NewItems:action.payload,
          filteredItems:action.payload,
        }

          ///////////////////////////////////////////////////////////// FILTER_DATE
       case FILTER_DATE:  
        const filterDateResult= state.NewItems.filter(
          (obj) =>
          (obj.publishedAt).slice(0,10) >= action.payload.fromDate  &&  (obj.publishedAt).slice(0,10) <= action.payload.toDate
         )    
        
       return {
         ...state,
         filteredItems:filterDateResult,
       }

       //////////////////////////////////////////////////////// SEARCH_FILTER
       case SEARCH_FILTER: 
        let allNewsToSearsh  = [...state.NewItems];     
       const results = allNewsToSearsh.filter(x  =>
        x.title.includes(action.payload)
      );        
        return {
          ...state,
          filteredItems:results
        }
        ////////////////////////////////// FILTER_CATEGORY
        case FILTER_CATEGORY: 
        let categoryArray = [] 
        state.NewItems.forEach((item) => {
          if(item.cat == action.payload){
            categoryArray.push(item)
          }
       })      
        return {
          ...state,
          filteredItems:categoryArray
        }
        ////////////////////////////////// PAGINATE_ITEMS
        case PAGINATE_ITEMS:      
        return {
          ...state,
          filteredItems:action.payload
         }

        
        
    default:
      return state 
  }
}