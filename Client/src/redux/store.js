import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./admin/adminSlice";

const store = configureStore({
    reducer: {
        admin: adminSlice,
    },
});

export default store;
