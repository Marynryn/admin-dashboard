import { createSlice } from "@reduxjs/toolkit";
import { login } from "./operations";

const mySlice = createSlice({
  name: "adminDashboard",
  initialState: {
    user: {
      email: null,
    },
    loggedIn: false,
    token: null,
    dashboard: null,
    isLoading: false,
    error: null,
    orders: [],
    suppliers: [],
    customers: [],
    products: [],
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user.email = action.payload.user.email;
        state.loggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // .addCase(fetchEvents.pending, (state, action) => {
    //   state.isLoading = true;
    // })
    // .addCase(fetchEvents.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;

    //   state.items = action.payload;
    // })
    // .addCase(fetchEvents.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // })
    // .addCase(eventRegistration.pending, (state, action) => {
    //   state.isLoading = true;
    // })
    // .addCase(eventRegistration.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    // })
    // .addCase(eventRegistration.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // })
    // .addCase(fetchParticipants.pending, (state, action) => {
    //   state.isLoading = true;
    // })
    // .addCase(fetchParticipants.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.participants = action.payload;
    // })
    // .addCase(fetchParticipants.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // });
  },
});

export const adminDashboardReducer = mySlice.reducer;
