import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { adminLogin } from "./adminThunk";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isLoading: false,
    error: null,
  },
  reducers: {
    adminLogout: () => {
      sessionStorage.removeItem("adminAccessToken");
      localStorage.removeItem("adminRefreshToken");
      toast.error("Logout successfully", { hideProgressBar: true, autoClose: 3000 });
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(adminLogin.fulfilled, (state) => {
        toast.success("Login successfully", { hideProgressBar: true, autoClose: 3000 });
        state.isLoading = false;
      })
      .addCase(adminLogin.rejected, (state, action) => {
        toast.error(action.payload || "Login failed", { hideProgressBar: true, autoClose: 3000 });
        state.isLoading = false;
      });
  }
});



export const { adminLogout } = adminSlice.actions;
export default adminSlice.reducer;
