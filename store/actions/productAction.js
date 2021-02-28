import axios from 'axios';
import * as types from '../types';


export const fetchProducts=()=>async dispatch =>{
    const res=await axios.get('https://603a25b7d2b9430017d24bd5.mockapi.io/test/name')
    dispatch({
        type:types.GET_PRODUCTS,
        payload:res
        
    })
}