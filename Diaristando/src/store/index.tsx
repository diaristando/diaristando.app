import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice.tsx';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
