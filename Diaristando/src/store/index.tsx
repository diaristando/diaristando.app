import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import feedbackReducer from './slices/feedbackSlice';
import userReducer from './slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'user',
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    user: persistReducer(persistConfig, userReducer),
    feedback: feedbackReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
