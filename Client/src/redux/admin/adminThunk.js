import axios from "axios";
import { localhostURL } from "../../util/url";
import { createAsyncThunk } from "@reduxjs/toolkit";
import adminAxiosInstance from "../../config/adminAxiosInstance";

export const adminLogin = createAsyncThunk(
  "adminSlice/adminLogin",
  async ({ email, password }, { rejectWithValue }) => {
    email = email.trim();
    password = password.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || password === "") {
      return rejectWithValue("All the fields are required!");
    } else if (!emailRegex.test(email)) {
      return rejectWithValue("Invalid email format!");
    } else if (password.length < 6) {
      return rejectWithValue("Password must be at least 6 characters long!");
    } else {
      try {
        const response = await axios.post(`${localhostURL}/admin`, { email, password });
        console.log( "Responds",response.data);
        
        sessionStorage.setItem("adminAccessToken", response.data.accessToken);
        localStorage.setItem("companyData", JSON.stringify(response.data.companyData))
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || "An error occurred. Please try again.");
      }
    }
  }
);


export const companyRegistration = createAsyncThunk(
  "adminSlice/companyRegistration",
  async ({ name, description, location, website, industry }, { rejectWithValue }) => {
    name = name.trim();
    description = description.trim();
    location = location.trim();
    website = website.trim();
    industry = industry.trim();

    const websiteRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;

    if (name === "" || description === "" || location === "" || website === "" || industry === "") {
      return rejectWithValue("All the fields are required!");
    } else if (!websiteRegex.test(website)) {
      return rejectWithValue("Invalid website format!");
    } else {
      try {
        console.log("start");
        
        const response = await adminAxiosInstance.post(`${localhostURL}/admin/company-registration`, { name, description, location, website, industry })
        console.log(response.data.companyData);
        localStorage.setItem("companyData", JSON.stringify(response.data.companyData))
        return response.data
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || "An error occurred. Please try again.");
      }
    }
  }
)
