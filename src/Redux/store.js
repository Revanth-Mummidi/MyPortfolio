//const {configureStore} = require('@reduxjs/toolkit');
import {configureStore} from '@reduxjs/toolkit';
import ThemeSlice from './ThemeSlice';



const rootreducer = {
   'theme':ThemeSlice,
};

export const store = configureStore({
  reducer: rootreducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // disable serializable state check
    }),
});

export default store;
