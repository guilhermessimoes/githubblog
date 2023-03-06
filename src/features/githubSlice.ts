import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getUserGithub } from "../services/github";

export const getGitHub = createAsyncThunk(
  "gitHubList/getGitHub", 
  async () => {
    try {
      const response = await getUserGithub()
      return response;
    } catch (error) {
      console.error(error);
    }
});

const gitHubSlice = createSlice({
  name: "gitHubList",
  initialState: {
    github: {},
    isLoading: false,
    hasError: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGitHub.pending, (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    })
      .addCase(getGitHub.fulfilled, (state, action) => {
        state.github = action.payload;
        state.isLoading = false;
        state.hasError = false
      })
      .addCase(getGitHub.rejected, (state, action) => {
        state.hasError = true
        state.isLoading = false;
      })
  }
});

// Selectors
export const selectGithub = state => state.gitHubList?.github;
export const selectLoadingState = state => state.gitHubList.isLoading;
export const selectErrorState = state => state.gitHubList.hasError;

export default gitHubSlice.reducer;