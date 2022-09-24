import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    form: false
  },
  reducers: {
      setModal: (state,action)=>action.payload
  }
})

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;