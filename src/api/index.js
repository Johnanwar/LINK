import axios from "axios";

export const BASE_URL = 'https://api.npoint.io/'; 

export const ENDPIONTS = {
     ALLNEWS  : "e2534d5412765bf36702",
     NEWSCATEGORY  : "c138bb84dc0b94ec5a18",
}


export const createAPIEndpoint = endpoint => {
   
    let url = BASE_URL + endpoint ;
    return {
        fetchAll: () => axios.get(url ),
        // fetchById: id => axios.get(url + id),
    }
}