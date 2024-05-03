import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LoginAdmin from "./pages/LoginAdmin";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

function App() {
    return (
        <Router>
            <Toaster toastOptions={{ duration: 3000 }} />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/login"
                    element={<LoginAdmin />}
                />
                <Route
                    path="/admin"
                    element={<Admin />}
                />
                {/* <Route path="/admin">
                    <Route
                        path="login"
                        element={<LoginAdmin />}
                    />
                    <Route
                        path="manage-orderlist"
                        element={<Admin />}
                    />
                </Route> */}
            </Routes>
        </Router>
    );
}

export default App;
