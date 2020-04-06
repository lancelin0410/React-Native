import reducer from './reducer'
import { createStore } from 'redux'

import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export default function configureStore() {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
}