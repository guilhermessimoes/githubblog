import { configureStore } from "@reduxjs/toolkit";
import gitHubReducer from '../features/githubSlice'

const store = configureStore({
  reducer: {
    gitHubList: gitHubReducer
  }
})


export type RootState = ReturnType<typeof store.getState>
export { store };