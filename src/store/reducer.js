import { createSlice } from "@reduxjs/toolkit";
import {
  getDashboard,
  getOrders,
  getProducts,
  logOut,
  login,
  productDelete,
} from "./operations";

const initialState = {
  user: {
    email: null,
  },
  loggedIn: false,
  token: localStorage.getItem("token") || null,
  dashboard: [],
  isLoading: false,
  error: null,
  orders: [],
  suppliers: [],
  customers: [],
  products: [],
  modalIsOpen: false,
};
const mySlice = createSlice({
  name: "adminDashboard",
  initialState,
  reducers: {
    setModal: (state, action) => {
      console.log(action);
      state.modalIsOpen = action.payload;
    },
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
      })
      .addCase(logOut.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = initialState.user;
        state.loggedIn = initialState.loggedIn;
        state.error = initialState.error;
        state.isLoading = initialState.isLoading;
        state.dashboard = initialState.dashboard;
      })

      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getDashboard.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getDashboard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.dashboard = action.payload;
      })
      .addCase(getDashboard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getOrders.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.orders = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(productDelete.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(productDelete.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (el) => el._id !== action.payload
        );

        state.isLoading = false;
      })
      .addCase(productDelete.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
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
export const { setModal } = mySlice.actions;
