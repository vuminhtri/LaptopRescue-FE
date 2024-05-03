import { useState } from "react";
import { useDispatch } from "react-redux";
import { createOrders } from "../redux/ordersSlice";

const Booking = () => {
    const [order, setOrder] = useState({
        name: "",
        email: "",
        phoneNum: "",
        description: "",
    });
    const dispatch = useDispatch()
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setOrder((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };
    
    const handleSubmit = (e) => {
        // try {
        //     const res = await axios.post(
        //         `${import.meta.env.VITE_SERVER}/create-order`,
        //         order
        //     );
        //     if (res.status === 200) {
        //         toast.success(res.data);
        //     } else {
        //         toast.error(res.data);
        //     }
        // } catch (error) {
        //     console.error("Lỗi khi gửi form: ", error);
        // }
        e.preventDefault();
        dispatch(createOrders(order));
    };
    return (
        <div
            className="flex justify-center min-w-full h-[calc(100vh-56px)] bg-cover bg-slate-300"
        >
            <div className="w-3/5 h-full">
                                <div className="w-full flex justify-center pt-10">
                    <form
                        id="formBooking"
                        className="w-3/5 h-full bg-[#042f69] text-center flex flex-col rounded-lg"
                        onSubmit={handleSubmit}
                    >
                        <p
                            className="font-medium text-3xl leading-3 text-white tracking-wider pb-6"
                            style={{ fontFamily: "Oswald, sans-serif" }}
                        >
                            Đặt lịch tư vấn sửa chữa ngay!
                        </p>
                        <input
                            className="w-5/6 mx-auto mb-4 pl-4 py-2 border rounded-3xl text-slate-500 text-sm focus-within:outline-blue-300"
                            placeholder="Họ tên"
                            value={order.name}
                            name="name"
                            onChange={handleOnChange}
                        />
                        <div className="flex gap-4 w-5/6 mx-auto mb-4">
                            <input
                                type="email"
                                className="w-1/2 px-4 py-2 border rounded-3xl text-slate-500 text-sm focus-within:outline-blue-300"
                                placeholder="Email"
                                value={order.email}
                                name="email"
                                onChange={handleOnChange}
                            />
                            <input
                                type="tel"
                                className="w-1/3 px-4 py-2 border rounded-3xl text-slate-500 text-sm focus-within:outline-blue-300"
                                placeholder="Số điện thoại/Zalo"
                                value={order.phoneNum}
                                name="phoneNum"
                                onChange={handleOnChange}
                            />
                        </div>
                        <textarea
                            className="w-5/6 mx-auto mb-4 pl-4 py-2 border rounded-3xl text-slate-500 text-sm resize-none overflow-hidden focus-within:outline-blue-300"
                            value={order.description}
                            name="description"
                            placeholder="Mô tả lỗi thiết bị gặp phải"
                            rows={3}
                            onChange={handleOnChange}
                        />
                        <button
                            className="mx-auto my-4 px-4 py-1 text-lg rounded-lg font-semibold bg-red-600 text-amber-300 hover:bg-red-700 tracking-wide"
                            style={{ fontFamily: "Oswald, sans-serif" }}
                        >
                            Đặt lịch
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Booking;