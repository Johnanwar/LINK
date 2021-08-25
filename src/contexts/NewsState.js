import { useReducer, useContext, createContext, useEffect } from 'react'
import { createAPIEndpoint, ENDPIONTS } from "../api";
import {reducer} from"./reducers/NewsReducer";

import { GET_NEWS } from "./types/types"
const NewsContext = createContext()
const NewsDispatchContext = createContext()




const INITIAL_STATE = {
  NewItems: [],
  HomeItems: [],
  WishList: [],
  length:0,
  SelectItem:{},
  Errors:""
};

export const NewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  /// called the end point to be shared in all the project .
  useEffect(() => {
  createAPIEndpoint(ENDPIONTS.ALLNEWS).fetchAll()
    .then(res => {
        console.log(res.data.articles)
        dispatch({
          type: GET_NEWS,
          payload: res.data.articles
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
