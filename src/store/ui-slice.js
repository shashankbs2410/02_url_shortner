import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isSignedIn: false,
    viewAllLinks: false,
    error: null,
    loading: false,
    shortLinkRequested: false,
    isEmpty: false,
  },
  reducers: {
    toggleSignIn(state) {
      state.isSignedIn = !state.isSignedIn;
    },
    toggleViewAllLinks(state) {
      state.viewAllLinks = !state.viewAllLinks;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    toggleLoading(state) {
      state.loading = !state.loading;
    },
    shortLinkRequested(state) {
      state.shortLinkRequested = true;
    },
    toggleIsEmpty(state) {
      state.isEmpty = !state.isEmpty;
    },
    shortLinkNotRequested(state) {
      state.shortLinkRequested = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
