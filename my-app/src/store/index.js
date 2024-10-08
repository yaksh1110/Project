import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import bagSlice from "./BagSlice";
import fetchStatusSlice from "./FetchStatusSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    bag: bagSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
  },
});

export default myntraStore;
