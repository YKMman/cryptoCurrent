import { configureStore } from "@reduxjs/toolkit";
import   storage from "redux-persist/lib/storage";
import { 
    FLUSH, 
    PAUSE, 
    PERSIST, 
    PURGE, 
    REGISTER, 
    REHYDRATE, 
    persistReducer, 
    persistStore 
} from "redux-persist";

import { rootReducer } from "./reducer";




const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['usdt']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})

export const persister = persistStore(store)

