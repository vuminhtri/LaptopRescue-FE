import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../redux/authSlice";

const LoginAdmin = () => {
    const [user, setUser] = useState({
        userName: "",
        password: "",
    });
    const auth = useSelector((state) => state.auth);

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (auth.loginStatus === "success") {
            navigate("/admin");
        }
    }, [auth.loginStatus, navigate]);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginAdmin(user));
    };

    return (
        <main className="flex max-w-full justify-center min-h-[100vh] pt-10 bg-slate-100">
            <div className="flex flex-col bg-white w-full md:w-2/5 h-full items-center p-7">
                <h2 className="mt-4 mb-7 text-4xl font-semibold">Đăng nhập</h2>
                <form
                    className="flex flex-col w-4/5 md:w-7/12"
                    onSubmit={handleSubmit}
                >
                    <label
                        className="mb-1.5"
                        htmlFor="userName"
                    >
                        Tên đăng nhập
                    </label>
                    <input
                        id="userName"
                        className="w-11/12 px-4 py-1 mb-4 text-base rounded border border-solid border-gray-300 outline-none"
                        type="text"
                        name="userName"
                        value={user.userName}
                        onChange={handleOnChange}
                        required
                    />
                    <label
                        className="mb-1.5"
                        htmlFor="password"
                    >
                        Mật khẩu
                    </label>
                    <div className="flex">
                        <input
                            id="password"
                            className="w-11/12 px-4 py-1 mb-4 text-base rounded border border-solid border-gray-300 outline-none"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={user.password}
                            onChange={handleOnChange}
                            required
                        />
                        <span
                            className="flex pt-2 -ml-6 text-xl cursor-pointer"
                            onClick={handleShowPassword}
                        >
                            {showPassword ? <BiShow /> : <BiHide />}
                        </span>
                    </div>
                    {auth.loginStatus === "rejected" ? (
                        <p className="text-sm pt-5 text-red-600">
                            {auth.loginError}
                        </p>
                    ) : null}
                    <button
                        disabled={auth.loginStatus === "pending"}
                        className="w-3/5 md:w-1/2 mt-2 mx-auto py-2.5 text-sm md:text-base text-white font-bold tracking-widest md:tracking-wider rounded-3xl bg-blue-500 hover:bg-blue-700 cursor-pointer"
                    >
                        {auth.loginStatus === "pending"
                            ? "Đang gửi"
                            : "Đăng nhập"}
                    </button>
                </form>
            </div>
        </main>
    );
};
export default LoginAdmin;
