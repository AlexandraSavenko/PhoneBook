import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { RegFormValues } from "../../components/RegisterForm/RegisterForm";
import { LogFormValues } from "../../components/LoginForm/LoginForm";

axios.defaults.baseURL = "https://connections-api.goit.global";

export const api = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export const setAuthHeader = (token: string): void => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = (): void => {
  api.defaults.headers.common.Authorization = "";
};

//------------------------------------------------handleError--------------------------------------------------------------------------

const handleError = (error: unknown, rejectWithValue: (value: string) => unknown) => {
  if (error instanceof Error) {
    return rejectWithValue(error.message);
  }
  return rejectWithValue("Something went wrong");
};

//------------------------------------------------------------------------------------------------------------------------------------
export const register = createAsyncThunk(
  "auth/register",
  async (credentials: RegFormValues, thunkApi) => {
    try {
      const { data } = await api.post("/users/signup", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error: unknown) {
      return handleError(error, thunkApi.rejectWithValue)
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials: LogFormValues, thunkApi) => {
    try {
      const { data } = await api.post("/users/login", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error: unknown) {
     return handleError(error, thunkApi.rejectWithValue)
    }
  }
);
export const logOut = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await api.post("/users/logout");
    clearAuthHeader();
  } catch (error: unknown) {
    return handleError(error, thunkApi.rejectWithValue)
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const reduxState = thunkApi.getState() as RootState;
    setAuthHeader(reduxState.auth.token!);
    try {
      const { data } = await api.get("/users/current");
      return data;
    } catch (error: unknown) {
      return handleError(error, thunkApi.rejectWithValue)
    }
  },
  {
    condition: (_, thunkApi) => {
      const reduxState = thunkApi.getState() as RootState;
      return reduxState.auth.token !== null;
    },
  }
);
