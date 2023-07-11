import { configureStore } from "@reduxjs/toolkit";
import { trendingReducer } from "./trendingMoviesSlice";
import { tvShowReducer } from "./tvShowSlice";

export const store = configureStore({
  reducer: {
    trending: trendingReducer,
    tvShow: tvShowReducer,
  },
});
