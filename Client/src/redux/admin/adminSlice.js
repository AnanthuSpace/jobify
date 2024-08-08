import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { adminLogin, jobRegistration, companyRegistration, updateCompany } from "./adminThunk";

const companyData = localStorage.getItem("companyData") ? JSON.parse(localStorage.getItem("companyData")) : null;
const jobData = localStorage.getItem("jobData") ? JSON.parse(localStorage.getItem("jobData")) : null;

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isLoading: false,
    error: null,
    companyData: companyData,
    jobData: jobData,
  },
  reducers: {
    adminLogout: (state) => {
      sessionStorage.removeItem("adminAccessToken");
      localStorage.removeItem("companyData");
      localStorage.removeItem("jobData");
      state.companyData = [];
      state.jobData = [];
      toast.success("Logout successfully", { hideProgressBar: true, autoClose: 3000 });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(adminLogin.fulfilled, (state) => {
        toast.success("Logged in successfully", { hideProgressBar: true, autoClose: 3000 });
        state.isLoading = false;
      })
      .addCase(adminLogin.rejected, (state, action) => {
        toast.error(action.payload || "Login failed", { hideProgressBar: true, autoClose: 3000 });
        state.isLoading = false;
      })

      .addCase(companyRegistration.fulfilled, (state, action) => {
        state.companyData = action.payload;
        toast.success("Company registered successfully", { hideProgressBar: true, autoClose: 3000 });
        state.isLoading = false;
      })
      .addCase(companyRegistration.rejected, (state, action) => {
        toast.error(action.payload || "Company registration failed", { hideProgressBar: true, autoClose: 3000 });
        state.isLoading = false;
      })

      .addCase(jobRegistration.fulfilled, (state, action) => {
        state.jobData = action.payload;
        toast.success("Job registered successfully", { hideProgressBar: true, autoClose: 3000 });
        state.isLoading = false;
      })
      .addCase(jobRegistration.rejected, (state, action) => {
        toast.error(action.payload || "Job registration failed", { hideProgressBar: true, autoClose: 3000 });
        state.isLoading = false;
      })

      .addCase(updateCompany.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCompany.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.companyData.findIndex(company => company.name === action.payload.name);
        if (index !== -1) {
          state.companyData[index] = action.payload;
        }
        toast.success("Company updated successfully", { hideProgressBar: true, autoClose: 3000 });
      })
      .addCase(updateCompany.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(action.payload || "Company update failed", { hideProgressBar: true, autoClose: 3000 });
      });
  }
});

export const { adminLogout } = adminSlice.actions;
export default adminSlice.reducer;
