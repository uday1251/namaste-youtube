import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },

  reducers: {
    addMessage: (state, action) => {
      state.message.splice(LIVE_CHAT_COUNT, 1);
      state.message.unshift(action.payload);
    },
    clearMessage:(state) => {
      state.message=[];
    },

         
  },
});

export const { addMessage,clearMessage } = chatSlice.actions;

export default chatSlice.reducer;
