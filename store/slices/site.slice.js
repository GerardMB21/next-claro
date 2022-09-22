import { createSlice } from "@reduxjs/toolkit";

export const siteSlice = createSlice({
  name: 'site',
  initialState: "hogar",
  reducers: {
      setSite: (state,action)=>action.payload
  }
})

export const { setSite } = siteSlice.actions;

export default siteSlice.reducer;