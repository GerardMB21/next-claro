import { createSlice } from "@reduxjs/toolkit";

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState: false,
  reducers: {
      setScroll: (state,action)=>action.payload
  }
})

export const { setScroll } = scrollSlice.actions;

export default scrollSlice.reducer;