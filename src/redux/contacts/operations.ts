// import axios from "axios";
import { api, setAuthHeader } from "../auth/operations";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ContactInfo } from "../../components/ContactForm/ContactForm";

interface newContact {
  id: string,
  name: string,
  number: string
}

const handleError = (error: unknown, rejectWithValue: (value: string) => unknown) => {
  if (error instanceof Error) {
    return rejectWithValue(error.message);
  }
  return rejectWithValue("Something went wrong");
};


export const fetchContacts = createAsyncThunk(
  "contacts/getContact",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.auth.token;
    if (!token) {
      throw new Error("No authentication token available");
    }
    setAuthHeader(token);
    try {
      const response = await api.get("/contacts");
      return response.data;
    } catch (error) {
      return handleError(error, thunkAPI.rejectWithValue)
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact: ContactInfo, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const token = state.auth.token;
      if (!token) {
        throw new Error("No authentication token available");
      }
      setAuthHeader(token);
      const response = await api.post("/contacts", newContact);
      return response.data;
    } catch (error) {
      return handleError(error, thunkAPI.rejectWithValue)
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactID: string, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const token = state.auth.token;
      if (!token) {
        throw new Error("No authentication token available");
      }
      setAuthHeader(token);
      const response = await api.delete(`/contacts/${contactID}`);
      return response.data;
    } catch (error) {
      return handleError(error, thunkAPI.rejectWithValue)
    }
  }
);
