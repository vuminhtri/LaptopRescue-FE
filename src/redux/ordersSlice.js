import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { toast } from "react-hot-toast";

const initialState = {
    orderList: [],
    fetchStatus: null,
    createStatus: null,
    // deleteStatus: null,
    editStatus: null,
    editPICStatus: null,
};

export const fetchOrders = createAsyncThunk(
    "orders/fetchOrders",
    async () => {
        try {
            const res = await axios.get(
                `${import.meta.env.VITE_SERVER}/orders/get-orders`
            );
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }
);

export const createOrders = createAsyncThunk(
    "orders/createOrders",
    async (value, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_SERVER}/orders/create-order`,
                value
            );
            return response.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response?.data);
        }
    }
);

export const editStatusOrders = createAsyncThunk(
    "orders/editStatusOrders",
    async (value, { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `${import.meta.env.VITE_SERVER}/orders/${value.id}/update-status`,
                { statusOrder: value.statusOrder }
            );

            return response.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response?.data);
        }
    }
);

export const editPICOrders = createAsyncThunk(
    "orders/editPICOrders",
    async (value, { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `${import.meta.env.VITE_SERVER}/orders/${value.id}/update-pic`,
                { picOrder: value.picOrder }
            );

            return response.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response?.data);
        }
    }
);

// export const ordersDelete = createAsyncThunk(
//     "orders/ordersDelete",
//     async (id) => {
//         try {
//             const response = await axios.delete(
//                 `${import.meta.env.VITE_SERVER}/orders/${id}`,
//                 setHeaders()
//             );

//             return response.data;
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response?.data);
//         }
//     }
// );

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    // extraReducers: {
    //     [fetchOrders.pending]: (state) => {
    //         state.fetchStatus = "pending";
    //     },
    //     [fetchOrders.fulfilled]: (state, action) => {
    //         state.fetchStatus = "success";
    //         state.orderList = action.payload;
    //     },
    //     [fetchOrders.rejected]: (state, action) => {
    //         state.fetchStatus = "rejected";
    //         toast.dismiss();
    //         toast.error(action.payload);
    //     },
    //     [editStatusOrders.pending]: (state) => {
    //         state.editStatus = "pending";
    //         toast.dismiss();
    //         toast.loading("Updating order status in process...");
    //     },
    //     [editStatusOrders.fulfilled]: (state, action) => {
    //         state.editStatus = "success";
    //         // const indexItem = state.orderList.findIndex(
    //         //     (item) => item._id === action.payload._id
    //         // );
    //         // state.orderList[indexItem] = action.payload;
    //         toast.dismiss();
    //         toast.success(action.payload);
    //     },
    //     [editStatusOrders.rejected]: (state, action) => {
    //         state.editStatus = "rejected";
    //         toast.dismiss();
    //         toast.error(action.payload);
    //     },
    //     [createOrders.pending]: (state) => {
    //         state.createStatus = "pending";
    //         toast.dismiss();
    //         toast.loading("Đang gửi biểu mẫu thông tin sửa chữa laptop...");
    //     },
    //     [createOrders.fulfilled]: (state, action) => {
    //         state.createStatus = "success";
    //         toast.dismiss();
    //         toast.success(action.payload);
    //     },
    //     [createOrders.rejected]: (state, action) => {
    //         state.createStatus = "rejected";
    //         toast.dismiss();
    //         toast.error(action.payload);
    //     },
    //     // [ordersDelete.pending]: (state) => {
    //     //     state.deleteStatus = "pending";
    //     // },
    //     // [ordersDelete.fulfilled]: (state, action) => {
    //     //     const indexItem = state.items.findIndex(
    //     //         (item) => item._id === action.payload._id
    //     //     );
    //     //     state.items.splice(indexItem, 1);
    //     //     state.deleteStatus = "success";
    //     //     toast("order Deleted!", {
    //     //         hideProgressBar: true,
    //     //         autoClose: 1500,
    //     //         style: { background: "#e74c3c", color: "white"},
    //     //     });
    //     // },
    //     // [ordersDelete.rejected]: (state) => {
    //     //     state.deleteStatus = "rejected";
    //     // },
    // },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, (state) => {
                state.fetchStatus = "pending";
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.fetchStatus = "success";
                state.orderList = action.payload;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.fetchStatus = "rejected";
                toast.dismiss();
                toast.error(action.payload);
            })
            .addCase(editStatusOrders.pending, (state) => {
                state.editStatus = "pending";
                toast.dismiss();
                toast.loading("Updating order status in process...");
            })
            .addCase(editStatusOrders.fulfilled, (state, action) => {
                state.editStatus = "success";
                toast.dismiss();
                toast.success(action.payload);
            })
            .addCase(editStatusOrders.rejected, (state, action) => {
                state.editStatus = "rejected";
                toast.dismiss();
                toast.error(action.payload);
            })
            .addCase(editPICOrders.pending, (state) => {
                state.editPICStatus = "pending";
                toast.dismiss();
                toast.loading("Updating order PIC in process...");
            })
            .addCase(editPICOrders.fulfilled, (state, action) => {
                state.editPICStatus = "success";
                toast.dismiss();
                toast.success(action.payload, {duration: 4000});
            })
            .addCase(editPICOrders.rejected, (state, action) => {
                state.editPICStatus = "rejected";
                toast.dismiss();
                toast.error(action.payload);
            })
            .addCase(createOrders.pending, (state) => {
                state.createStatus = "pending";
                toast.dismiss();
                toast.loading("Đang gửi biểu mẫu thông tin sửa chữa laptop...");
            })
            .addCase(createOrders.fulfilled, (state, action) => {
                state.createStatus = "success";
                toast.dismiss();
                toast.success(action.payload);
            })
            .addCase(createOrders.rejected, (state, action) => {
                state.createStatus = "rejected";
                toast.dismiss();
                toast.error(action.payload);
            });
    },
});

export default ordersSlice.reducer;
