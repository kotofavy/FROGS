import {createStore} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import {AsyncStorage} from "react-native";
import RootReducer from '../Reducers';
import storeConstants from './store';

const persistConfig = {
    key: "root",
    storage: AsyncStorage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, storeConstants);
const persistor = persistStore(store);

const getPersistor = () => persistor;
const getStore = () => store;
const getState = () => {
    return store.getState();
} 

export default {getStore, getState, getPersistor};