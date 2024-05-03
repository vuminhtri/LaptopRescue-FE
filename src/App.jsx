import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LoginAdmin from "./pages/LoginAdmin";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Quotation from "./pages/Quotation";
import Booking from "./pages/Booking";

function App() {
    return (
        <Router>
            <Toaster toastOptions={{ duration: 3000 }} />
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quotation" element={<Quotation/>} />
                <Route path="/booking" element={<Booking/>} />
                <Route path="/login" element={<LoginAdmin />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
