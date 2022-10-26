import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

//Buscar los productos
export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCTS_REQUEST: {
      return {
        loading: true,
        products: [],
      };
    }

    case ALL_PRODUCTS_SUCCESS: {
      return {
        loading: false,
        productos: action.payload.productos, //Cargar productos
        cantidad: action.payload.cantidad,
      };
    }

    case ALL_PRODUCTS_FAIL: {
      return {
        loading: false,
        error: action.payload,
      };
    }

    case CLEAR_ERRORS: {
      return {
        ...state,
        error: null,
      };
    }

    default:
      return state;
  }
};

//Reducer para tener todos los detalles
export const productsDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST: {
      return {
        loading: true,
        product: {},
      };
    }

    case PRODUCT_DETAILS_SUCCESS: {
      return {
        loading: false,
        product: action.payload.product, //Cargar productos
      };
    }

    case PRODUCT_DETAILS_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case CLEAR_ERRORS: {
      return {
        ...state,
        error: null,
      };
    }

    default:
      return state;
  }
};
