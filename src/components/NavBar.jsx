import { useState } from "react";
import logo from "/icon.jpg";

import { Link } from "react-router-dom";

const NavBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };
    return (
        <header className="flex gap-10 shadow-md max-w-full h-14 px-2 md:px-4 z-50 bg-yellow-100">
            <div className="w-1/12 h-full pt-1">
                <Link to={""}>
                    <div className="h-12">
                        <img className="h-full rounded-3xl" src={logo} alt="Logo" />
                    </div>
                </Link>
            </div>

            <div className="w-11/12 flex items-center justify-around">
                <nav className="gap-4 md:gap-6 text-base md:text-lg flex ">
                    <div>
                        <Link to={""} className="no-underline text-black">GIỚI THIỆU</Link>
                    </div>
                    <div className="relative" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
                        DỊCH VỤ
                        {showDropdown && (
                            <div className="absolute top-full left-0 w-28 bg-white border border-gray-200 shadow-md py-2">
                                <Link to="/quotation" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 no-underline">Bảng giá</Link>
                                <Link to="/booking" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 no-underline">Đặt lịch</Link>
                            </div>
                        )}
                    </div>
                </nav>

            </div>

        </header>
    );
};

export default NavBar;
