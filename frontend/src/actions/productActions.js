import axios from "axios";

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/productConstants';

//Metodo dispatch - Enviar Producto
export const getProducts = (currentPage = 1, keyword = '',precio) => async(dispatch) => {
    try{
        dispatch({type: ALL_PRODUCTS_REQUEST})
        let link = `/api/productos?keyword=${keyword}&page=${currentPage}&${currentPage}&precio[gte]=${precio[0]}&precio[lte=${precio[1]}]`

        //Axios se comunica con esta ruta en el backend
        const {data} = await axios.get(link)

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


//Productos en detalle
export const getProductDetails = (id) => async(dispatch) => {
    try{
        dispatch({type: PRODUCT_DETAILS_REQUEST})
        
        //Axios se comunica con esta ruta en el backend
        const {data} = await axios.get(`/api/producto/${id}`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        })
    }catch (error){
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
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