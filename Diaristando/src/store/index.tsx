import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import feedbackReducer from './slices/feedbackSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        feedback: feedbackReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
