import { configureStore } from "@reduxjs/toolkit";
import linksSlice from "./links-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, links: linksSlice.reducer },
});

export default store;
