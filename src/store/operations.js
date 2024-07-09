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
  "ALLOrders",
  async ({ query }, thunkAPI) => {
    try {
      let url = "/orders";
      if (query && query.name) {
        url += `?name=${query.name}`;
      }
      const { data } = await api.get(url);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const eventRegistration = createAsyncThunk(
//   "events/addParticipants",
//   async ({ id, data }, { rejectWithValue }) => {
//     console.log(id, data);
//     try {
//       const contact = await api.patch(`/${id}/signup`, data);
//       return contact.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
// export const fetchParticipants = createAsyncThunk(
//   "event/participants",
//   async ({ id }, { rejectWithValue }) => {
//     try {
//       const participants = await api.get(`/${id}`);

//       return participants.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
