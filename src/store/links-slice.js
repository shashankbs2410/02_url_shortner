import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const linksSlice = createSlice({
  name: "links",
  initialState: { allLinks: [], resultLinks: [] },
  reducers: {
    inserLinks(state, action) {
      state.allLinks.push(action.payload);
    },
    setResult(state, action) {
      state.resultLinks = action.payload;
    },
    clearAllLinks(state) {
      state.allLinks = [];
    },
    clearResultLinks(state) {
      state.resultLinks = [];
    },
  },
});

export const linksActions = linksSlice.actions;

export default linksSlice;

export const fetchShortLink = async (input, dispatch) => {
  if (input.trim().length === 0) {
    dispatch(uiActions.toggleIsEmpty());
    return;
  } else {
    let longLink = `https://api.shrtco.de/v2/shorten?url=${input}`;
    dispatch(uiActions.toggleLoading());

    try {
      const response = await fetch(longLink);

      const data = await response.json();

      const shortenedLinks = {
        code: data.result.code,
        short_link: data.result.short_link,
        short_link2: data.result.short_link2,
        share_link: data.result.share_link,
        original_link: data.result.original_link,
      };

      dispatch(linksActions.setResult(shortenedLinks));
      dispatch(uiActions.setError(null));
      dispatch(
        linksActions.inserLinks({
          code: shortenedLinks.code,
          original_link: shortenedLinks.original_link,
          short_link: shortenedLinks.short_link,
        })
      );
    } catch (error) {
      dispatch(uiActions.setError(error.message));
    }
    dispatch(uiActions.toggleLoading());
    dispatch(uiActions.shortLinkRequested());
  }
};
