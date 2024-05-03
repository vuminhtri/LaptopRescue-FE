import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/authSlice.js";
import ordersReducer from "./redux/ordersSlice.js";
import { Provider } from "react-redux";

const store = configureStore({
    reducer: {
        auth: authReducer,
        orders: ordersReducer,
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
);
