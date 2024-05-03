const TableOfContent = () => {
    return (
        <>
            {/* <div className="w-4/5 my-5 relative bg-slate-200 rounded-lg">
                    <div id="toc">
                        <div id="toc-header">
                            <div className="flex pl-4 pt-4 gap-2 items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="20px"
                                    viewBox="0 -10 490.66667 490"
                                    width="20px"
                                >
                                    <path d="m48 171h-32c-8.832031 0-16 7.167969-16 16s7.167969 16 16 16h32c2.945312 0 5.332031 2.390625 5.332031 5.332031v5.335938c0 2.941406-2.386719 5.332031-5.332031 5.332031h-10.667969c-20.585937 0-37.332031 16.746094-37.332031 37.332031v26.667969c0 8.832031 7.167969 16 16 16h53.332031c8.832031 0 16-7.167969 16-16s-7.167969-16-16-16h-37.332031v-10.667969c0-2.941406 2.390625-5.332031 5.332031-5.332031h10.667969c20.585938 0 37.332031-16.746094 37.332031-37.332031v-5.335938c0-20.585937-16.746093-37.332031-37.332031-37.332031zm0 0"></path>
                                    <path d="m48 341.667969h-32c-8.832031 0-16 7.167969-16 16s7.167969 16 16 16h32c2.945312 0 5.332031 2.386719 5.332031 5.332031v5.332031c0 2.945313-2.386719 5.335938-5.332031 5.335938h-21.332031c-8.832031 0-16 7.167969-16 16s7.167969 16 16 16h21.332031c2.945312 0 5.332031 2.386719 5.332031 5.332031v5.332031c0 2.945313-2.386719 5.335938-5.332031 5.335938h-32c-8.832031 0-16 7.167969-16 16s7.167969 16 16 16h32c20.585938 0 37.332031-16.746094 37.332031-37.335938v-5.332031c0-7.9375-2.539062-15.273438-6.78125-21.332031 4.242188-6.058594 6.78125-13.398438 6.78125-21.335938v-5.332031c0-20.585938-16.746093-37.332031-37.332031-37.332031zm0 0"></path>
                                    <path d="m16 32.332031h16v80c0 8.832031 7.167969 16 16 16s16-7.167969 16-16v-96c0-8.832031-7.167969-16-16-16h-32c-8.832031 0-16 7.167969-16 16s7.167969 16 16 16zm0 0"></path>
                                    <path d="m149.332031 85.667969h320c11.796875 0 21.335938-9.539063 21.335938-21.335938s-9.539063-21.332031-21.335938-21.332031h-320c-11.796875 0-21.332031 9.535156-21.332031 21.332031s9.535156 21.335938 21.332031 21.335938zm0 0"></path>
                                    <path d="m469.332031 213.667969h-320c-11.796875 0-21.332031 9.535156-21.332031 21.332031s9.535156 21.332031 21.332031 21.332031h320c11.796875 0 21.335938-9.535156 21.335938-21.332031s-9.539063-21.332031-21.335938-21.332031zm0 0"></path>
                                    <path d="m469.332031 384.332031h-320c-11.796875 0-21.332031 9.539063-21.332031 21.335938s9.535156 21.332031 21.332031 21.332031h320c11.796875 0 21.335938-9.535156 21.335938-21.332031s-9.539063-21.335938-21.335938-21.335938zm0 0"></path>
                                </svg>
                                <span className="font-bold text-lg">Mục lục nội dung</span>
                                <span className="text-blue-600">[ẩn]</span>
                            </div>
                        </div>
                        <ul>
                            <ol>
                                <li>
                                    <a
                                        href="#1-tim-hieu-chung-ve-sua-chua-laptop-24h"
                                        title="1. Tìm hiểu chung về Sửa chữa Laptop 24h"
                                    >
                                      Tìm hiểu chung về Sửa chữa Laptop 24h
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#2-dich-vu-sua-chua-laptop-24h-cung-cap"
                                        title="2. Dịch vụ Sửa chữa Laptop 24h cung cấp"
                                    >
                                        2. Dịch vụ Sửa chữa Laptop 24h cung cấp
                                    </a>
                                    <ol>
                                        <li>
                                            <a
                                                href="#2-1-dich-vu-sua-chua-laptop-sua-chua-may-tinh-pc-macbook"
                                                title="2.1. Dịch vụ sửa chữa laptop, sửa chữa máy tính PC, MacBook"
                                            >
                                                2.1. Dịch vụ sửa chữa laptop,
                                                sửa chữa máy tính PC, MacBook
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#2-2-nhap-khau-va-phan-phoi-san-pham-linh-kien-laptop"
                                                title="2.2. Nhập khẩu và phân phối sản phẩm linh kiện laptop"
                                            >
                                                2.2. Nhập khẩu và phân phối sản
                                                phẩm linh kiện laptop
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#2-3-chuyen-giao-cong-nghe-cung-cap-dich-vu-dao-tao-nghe-sua-laptop-chuyen-nghiep"
                                                title="2.3. Chuyển giao công nghệ, cung cấp dịch vụ đào tạo nghề sửa laptop chuyên nghiệp"
                                            >
                                                2.3. Chuyển giao công nghệ, cung
                                                cấp dịch vụ đào tạo nghề sửa
                                                laptop chuyên nghiệp
                                            </a>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </ul>
                    </div>
                </div> */}
        </>
    );
};

export default TableOfContent;
