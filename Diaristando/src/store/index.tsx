import { configureStore } from '@reduxjs/toolkit';

import feedbackReducer from './slices/feedbackSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        feedback: feedbackReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
