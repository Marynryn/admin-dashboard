import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const api = axios.create({
  baseURL: "https://admin-dashboard-backend-9vkj.onrender.com/api/",
});

const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem("token", token);
};

const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = "";
  localStorage.removeItem("token");
};

export const login = createAsyncThunk("user/login", async (user, thunkAPI) => {
  try {
    const res = await api.post("user/login", user);

    setAuthHeader(res.data.token);

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  try {
    const { data } = await api.post("user/logout");

    clearAuthHeader();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getDashboard = createAsyncThunk(
  "dashboard",
  async (_, thunkAPI) => {
    try {
      const dashboard = await api.get("/dashboard");

      return dashboard.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const token = localStorage.getItem("token");
if (token) {
  setAuthHeader(token);
}
export const getOrders = createAsyncThunk(
  "orders/getOrders",
  async ({ query = "" }, thunkAPI) => {
    try {
      const { data } = await api.get(`/orders?name=${query}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getSuppliers = createAsyncThunk(
  "orders/getSuppliers",
  async ({ query = "" }, thunkAPI) => {
    try {
      const { data } = await api.get(`/suppliers?name=${query}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getProducts = createAsyncThunk(
  "orders/getProducts",
  async ({ query = "" }, thunkAPI) => {
    try {
      const { data } = await api.get(`/products?name=${query}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const productDelete = createAsyncThunk(
  "/productDelete",
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/products/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const addProduct = createAsyncThunk(
  "addProduct",
  async (productData, thunkAPI) => {
    try {
      const { data } = await api.post("/products/", productData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editProduct = createAsyncThunk(
  "editProduct",
  async ({ dataWithoutId, _id }, thunkAPI) => {
    try {
      const { data } = await api.put(`/products/${_id}`, dataWithoutId);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addSuppliers = createAsyncThunk(
  "addSuppliers",
  async (productData, thunkAPI) => {
    try {
      const { data } = await api.post("/suppliers/", productData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editSuppliers = createAsyncThunk(
  "editSuppliers",
  async ({ dataWithoutId, _id }, thunkAPI) => {
    try {
      const { data } = await api.put(`/suppliers/${_id}`, dataWithoutId);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getCustomers = createAsyncThunk(
  "orders/getCustomers",
  async ({ query = "" }, thunkAPI) => {
    try {
      const { data } = await api.get(`/customers?name=${query}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
