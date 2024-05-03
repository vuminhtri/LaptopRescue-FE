/* eslint-disable react/no-unescaped-entities */
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { editStatusOrders, fetchOrders } from "../redux/ordersSlice";

export default function ManageUsers() {
    const { orderList } = useSelector((state) => state.orders);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedOrderId, setSelectedOrderId] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    const handleEditStatus = (id, role) => {
        setIsEditing(true);
        setSelectedOrderId(id);
        setSelectedStatus(role);
    };

    const handleSaveStatus = async () => {
        setIsEditing(false);
        await dispatch(
            editStatusOrders({
                id: selectedOrderId,
                statusOrder: selectedStatus,
            })
        );
        dispatch(fetchOrders());
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    const handleStatusChange = (e) => {
        setSelectedStatus(e.target.value);
    };

    const openModal = (id) => {
        const user = orderList.find((user) => user._id === id);
        setSelectedOrder(user);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const rows =
        orderList &&
        orderList.map((order) => {
            return {
                id: order._id,
                nameCustomer: order.nameCustomer,
                emailCustomer: order.emailCustomer,
                phoneCustomer: order.phoneCustomer,
                descriptionError: order.descriptionError,
                statusOrder: order.statusOrder,
            };
        });

    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        {
            field: "nameCustomer",
            headerName: "Customer's Name",
            width: 150,
        },
        {
            field: "emailCustomer",
            headerName: "Customer's Email",
            width: 200,
        },
        {
            field: "phoneCustomer",
            headerName: "Customer's Phone",
            width: 140,
        },
        {
            field: "descriptionError",
            headerName: "Description Error",
            width: 300,
        },
        {
            field: "statusOrder",
            headerName: "Status Order",
            width: 100,
            renderCell: (params) => {
                return isEditing && selectedOrderId === params.row.id ? (
                    <select
                        className="text-center bg-transparent border-none outline-none p-1 rounded cursor-pointer"
                        value={selectedStatus}
                        onChange={handleStatusChange}
                    >
                        <option
                            className="text-green-700"
                            value="Pending"
                        >
                            Pending
                        </option>
                        <option
                            className="text-amber-700"
                            value="Assigned"
                        >
                            Assigned
                        </option>
                        <option
                            className="text-red-700"
                            value="Completed"
                        >
                            Completed
                        </option>
                    </select>
                ) : (
                    <div className="text-center">
                        {(() => {
                            switch (params.row.statusOrder) {
                                case "Completed":
                                    return (
                                        <span
                                            className="text-green-600"
                                            title="Đã hoàn thành"
                                        >
                                            Completed
                                        </span>
                                    );
                                case "Assigned":
                                    return (
                                        <span
                                            className="text-blue-700"
                                            title="Đã được giao"
                                        >
                                            Assigned
                                        </span>
                                    );
                                case "Pending":
                                    return (
                                        <span
                                            className="text-amber-700"
                                            title="Chờ xác nhận"
                                        >
                                            Pending
                                        </span>
                                    );
                                default:
                                    return null;
                            }
                        })()}
                    </div>
                );
            },
        },
        {
            field: "actions",
            headerName: "Actions",
            sortable: false,
            width: 250,
            renderCell: (params) => {
                return (
                    <div className="flex w-full h-full justify-around items-center">
                        {isEditing && selectedOrderId === params.row.id ? (
                            <>
                                <button
                                    className="bg-[#4caf50] border-none outline-none py-2 px-1 text-white rounded cursor-pointer leading-normal"
                                    onClick={handleSaveStatus}
                                >
                                    Save Edit Status
                                </button>
                                <button
                                    className="bg-[#ff4d49] border-none outline-none py-2 px-1 text-white rounded cursor-pointer leading-normal"
                                    onClick={handleCancelEdit}
                                >
                                    Cancel Edit Status
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    className="bg-[#0866ff] border-none outline-none py-2 px-1 text-white rounded cursor-pointer leading-normal"
                                    onClick={() =>
                                        handleEditStatus(
                                            params.row.id,
                                            params.row.statusOrder
                                        )
                                    }
                                >
                                    Edit Order Status
                                </button>
                                <button
                                    className="bg-green-700 border-none outline-none py-2 px-1 text-white rounded cursor-pointer leading-normal"
                                    onClick={() => openModal(params.row.id)}
                                >
                                    View Order Detail
                                </button>
                            </>
                        )}
                    </div>
                );
            },
        },
    ];

    return (
        <div className="w-full flex justify-center">
            <div className="w-11/12 h-96">
                <h2 className="font-bold text-2xl pb-5">Orders</h2>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSize={5}
                    disableColumnSelector={true}
                />
                <ReactModal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    // contentLabel="View detailed error description of the order"
                    contentLabel="View order error description details"
                    style={{
                        overlay: {
                            backgroundColor: "rgba(0, 0, 0, 0.7)",
                        },
                        content: {
                            top: "50%",
                            left: "50%",
                            right: "auto",
                            bottom: "auto",
                            width: "45%",
                            height: "auto",
                            marginRight: "-50%",
                            transform: "translate(-50%, -50%)",
                        },
                    }}
                >
                    <div className="w-full flex flex-col justify-center items-center">
                        <h2 className="text-3xl font-bold mb-8">
                            Detail Information Order
                        </h2>
                        <div className="mt-6 w-3/5 justify-start">
                            {selectedOrder && (
                                <div className="w-full pl-10 py-2">
                                    <div className="flex">
                                        <span className="font-medium italic w-2/5">
                                            Customer's Name:
                                        </span>
                                        <span className="w-3/5">
                                            {selectedOrder.nameCustomer}
                                        </span>
                                    </div>
                                    <div className="flex">
                                        <span className="font-medium italic w-2/5">
                                            Customer's Email:
                                        </span>
                                        <span className="w-3/5">
                                            {selectedOrder.emailCustomer}
                                        </span>
                                    </div>
                                    <div className="flex">
                                        <span className="font-medium italic w-2/5">
                                            Customer's Phone:
                                        </span>
                                        <span className="w-3/5">
                                            {selectedOrder.phoneCustomer}
                                        </span>
                                    </div>
                                    <div className="flex">
                                        <span className="font-medium italic w-2/5">
                                            Description Error:
                                        </span>
                                        <span className="w-3/5">
                                            {selectedOrder.descriptionError}
                                        </span>
                                    </div>
                                    <div className="flex">
                                        <span className="font-medium italic w-2/5">
                                            Status Order:
                                        </span>
                                        <span className="w-3/5">
                                            {selectedOrder.statusOrder}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex justify-center pt-10">
                            <button
                                className="px-7 py-1.5 rounded-lg border-2 border-blue-500"
                                onClick={closeModal}
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </ReactModal>
            </div>
        </div>
    );
}
