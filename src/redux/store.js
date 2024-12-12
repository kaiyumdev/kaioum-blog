import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from "../redux/user/userSlice.js";
import themeReducer from "../redux/theme/themeSlice.js";
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
} from 'redux-persist'

const rootReducer = combineReducers({
    user: userReducer,
    theme: themeReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    version: 1
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    // reducer: {
    //     user: userReducer
    // },
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
});

export const persistor = persistStore(store)