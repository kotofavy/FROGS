import {createStore, applyMiddleware} from 'redux';
import RootReducer from '../Reducers';
import thunk from 'redux-thunk';

const initialState = {};
const store = createStore(
    RootReducer,
    initialState,
    applyMiddleware(thunk)
)

export default store;