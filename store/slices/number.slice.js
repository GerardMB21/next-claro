import { createSlice } from "@reduxjs/toolkit";

export const numberSlice = createSlice({
  name: 'number',
  initialState: {
    hogar: "016805993",
    movil: "016805992",
    help: "016806465",
    service: "PeruHfcCallme",
    userName: "dacar",
    password: "StzsK46vs0a4nCJU55wD"
  },
  reducers: {
      setNumber: (state,action)=>action.payload
  }
})

export const { setNumber } = numberSlice.actions;

export default numberSlice.reducer;