import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone:false,
    currentlyFetching: false,
  },
  reducers: {
    fetchingStart: (state) => {
      state.currentlyFetching = true;
    },
    fetchingEnd: (state) => {
      state.currentlyFetching = false;
    },
    fetchDone:(state) =>{
        state.fetchDone = true
    }
  },
});

export const fetchActions = fetchStatusSlice.actions;

export default fetchStatusSlice;
