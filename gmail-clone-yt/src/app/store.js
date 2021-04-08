import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';
import userReducer from "../features/userSilce";
export default configureStore({
  reducer: {
    mail : mailReducer,
    user : userReducer ,
  },
});
