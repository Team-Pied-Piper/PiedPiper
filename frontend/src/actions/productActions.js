import axios from "axios";

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    CLEAR_ERRORS
} from '../constants/productConstants';

//Metodo dispatch - Despachar una entrega
export const getProducts = () => async(dispatch) => {
    try{
        dispatch({type: ALL_PRODUCTS_REQUEST})
        
        //Axios se comunica con esta ruta en el backend
        const {data} = await axios.get('api/productos')

        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })
    }catch (error){
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}

//clear error
export const clearErrors = () => async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}