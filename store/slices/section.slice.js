import { createSlice } from "@reduxjs/toolkit";

export const sectionSlice = createSlice({
  name: 'section',
  initialState: 0,
  reducers: {
      setSection: (state,action)=>action.payload
  }
})

export const { setSection } = sectionSlice.actions;

export default sectionSlice.reducer;