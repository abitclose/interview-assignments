import { createStore, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate ,persistReducer} from 'redux-persist'
import webStorage from 'redux-persist/lib/storage';
import * as actionTypes from './types'


//mixed reducer
import reducer from './reducers'

//support async action
import thunk from 'redux-thunk'

//import redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'

const persistConfig = {
    key: 'default',
    storage: webStorage
};

const persistStoreReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistStoreReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store)

//export action's types
export const ACTION_TYPES = actionTypes;

export function getStoreValue(key) {

    var value = store.getState();
    if (!key) {
        return
    }

    var keys = key.split('.')
    while (keys.length > 0) {
        var name = keys.shift();
        value = value[name]
        //console.log(JSON.stringify([name, value],null,2))
    }
    return value;
}

export default store