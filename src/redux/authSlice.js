import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
    loginStatus: "",
    loginError: "",
};

export const loginAdmin = createAsyncThunk(
    "auth/loginAdmin",
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.post(
                `${import.meta.env.VITE_SERVER}/check-login-admin`,
                values
            );
            return token.data;
        } catch (error) {
            console.log(error.response?.data);
            return rejectWithValue(error.response.data);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logoutUser(state) {
            localStorage.removeItem("hadLoggedin");
            return {
                ...state,
                loginStatus: "",
                loginError: "",
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginAdmin.pending, (state) => {
            toast.dismiss();
            toast.loading("Đang xử lý đăng nhập...");
            return { ...state, loginStatus: "pending" };
        });
        builder.addCase(loginAdmin.fulfilled, (state, action) => {
            if (action.payload) {
                localStorage.setItem("hadLoggedin", true);
                toast.dismiss();
                toast.success(action.payload);
                return {
                    ...state,
                    loginStatus: "success",
                };
            } else return state;
        });
        builder.addCase(loginAdmin.rejected, (state, action) => {
            toast.dismiss();
            toast.error(
                "Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập"
            );
            return {
                ...state,
                loginStatus: "rejected",
                loginError: action.payload,
            };
        });
    },
});

export default authSlice.reducer;
