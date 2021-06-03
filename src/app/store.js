import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/user/userSlice'
import movieReducer from '../features/counter/movie/movieSlice'
import userReducer from '../features/user/userSlice'
export const store = configureStore({
  reducer: {
   movie:movieReducer,
   user:userSlice
  },
});
