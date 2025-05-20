import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

interface authState {
  user: {
      name: string | null,
      email: string | null,
    },
    token: string | null,
    isLoggedIn: boolean,
    isLoading: boolean,
    isRefreshing: boolean,
    isError: boolean,
}

const initialState: authState = {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    isRefreshing: false,
    isError: false,
  }

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      });
    // .addMatcher(
    //   isAnyOf(register.pending, logIn.pending),
    //   (state) => (state.isLoading = true)
    // );
    // .addMatcher(
    //   isAnyOf(register.rejected, logIn.rejected),
    //   (state, action) => (
    //     (state.isLoading = false), (state.isError = action.payload)
    //   )
    // );
  },
});
export default authSlice.reducer;
