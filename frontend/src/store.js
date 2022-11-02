//Redux
import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';//Ir a dar un toque para que el back reaccione
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsReducer, productDetailsReducer } from './reducer/productReducer';

const reducer = combineReducers ({
    products: productsReducer,
    productDetails : productDetailsReducer
})

let initialState = {}

const middleware = [thunk]
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))//Respuestas en pantalla

export default store;