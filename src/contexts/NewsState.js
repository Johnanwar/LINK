import { useReducer, useContext, createContext, useEffect } from 'react'
import { createAPIEndpoint, ENDPIONTS } from "../api";
import {reducer} from"./reducers/NewsReducer";

import { GET_NEWS , GET_CATEGORY } from "./types/types"
const NewsContext = createContext()
const NewsDispatchContext = createContext()


const INITIAL_STATE = {
  NewItems: [],
  HomeItems: [],
  WishList: [],
  filteredItems:[],
  category:[],
  length:0,
  SelectItem:{},
  Errors:""
};

export const NewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)


  /// called the end point to be shared in all the project .
  useEffect(() => {
    ////// call all category
    createAPIEndpoint(ENDPIONTS.NEWSCATEGORY).fetchAll()
    .then(res => {
         dispatch({
          type: GET_CATEGORY,
          payload: res.data.sourceCategory
        })
    ////// call all category
    createAPIEndpoint(ENDPIONTS.ALLNEWS).fetchAll()
     .then(resc => {
        console.log(resc.data.articles)
        console.log(res.data.sourceCategory)
       ////// add the category to the article object
        let catArray = [] 
        resc.data.articles.forEach((item) => {
          return res.data.sourceCategory.some(function (item2) {
          if(item.sourceID == item2.id){
            item.cat = item2.name;
            catArray.push(item)
            }
          })
         })
          dispatch({
            type: GET_NEWS,
            payload: catArray
          })
          })
        })
    .catch(err => console.log(err))

 }, [])

 

  return (
    <NewsDispatchContext.Provider value={dispatch}>
      <NewsContext.Provider value={state}>
        {children}
      </NewsContext.Provider>
    </NewsDispatchContext.Provider>
  )
}

export const useNews= () => useContext(NewsContext)
export const useDispatchNews = () => useContext(NewsDispatchContext)
