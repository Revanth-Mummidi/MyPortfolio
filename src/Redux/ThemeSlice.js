import {createSlice} from '@reduxjs/toolkit';

const initialState = {
   theme:"Light",
};

const ThemeSlice = createSlice({
  name: 'theme',
  initialState:initialState,
  reducers: {
    setTheme(state,action){
        state.theme=action.payload;
    }
  }
  
});

export const {setTheme} = ThemeSlice.actions;
export default ThemeSlice.reducer;