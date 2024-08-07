import { createSlice } from "@reduxjs/toolkit";
import {
  addProduct,
  addSuppliers,
  editProduct,
  editSuppliers,
  getCustomers,
  getDashboard,
  getOrders,
  getProducts,
  getSuppliers,
  logOut,
  login,
  productDelete,
} from "./operations";
import toast from "react-hot-toast";

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
};
const mySlice = createSlice({
  name: "adminDashboard",
  initialState,

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
      })
      .addCase(addProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        toast.error(action.payload);
      })
      .addCase(editProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        const index = state.products.findIndex(
          (p) => p._id === updatedProduct._id
        );
        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        toast.error(action.payload);
      })
      .addCase(getSuppliers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSuppliers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.suppliers = action.payload;
      })
      .addCase(getSuppliers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addSuppliers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addSuppliers.fulfilled, (state, action) => {
        state.suppliers.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addSuppliers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        toast.error(action.payload);
      })
      .addCase(editSuppliers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(editSuppliers.fulfilled, (state, action) => {
        const updatedSupplier = action.payload;
        const index = state.suppliers.findIndex(
          (p) => p._id === updatedSupplier._id
        );
        if (index !== -1) {
          state.suppliers[index] = updatedSupplier;
        }
      })
      .addCase(editSuppliers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        toast.error(action.payload);
      })
      .addCase(getCustomers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCustomers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.customers = action.payload;
      })
      .addCase(getCustomers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const adminDashboardReducer = mySlice.reducer;
