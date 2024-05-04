import tsvbuituannghia from "../assets/tsv bui tuan nghia.jpg";
import tsvdangminhkhoi from "../assets/tsv dang minh khoi.jpg";
import tsvphamtungthuy from "../assets/tsv pham tung thuy.jpg";

const AboutUs = () => {
    return (
        <div className="flex flex-col justify-center items-center min-w-full h-full bg-cover bg-slate-300">
            <div className="w-3/5 h-full bg-white">
                <h2 className="text-center">ĐỘI NGŨ KỸ THUẬT ULAP</h2>
                <p className="px-10 indent-5">
                    Hệ thống kỹ thuật viên của ULAP gồm 3 bạn sinh viên năm cuối
                    chuyên ngành Công nghệ thông tin, trường Đại học Công nghệ,
                    Đại học Quốc gia Hà Nội với thành tích học tập từ Giỏi trở
                    lên, GPA {">"}= 3.4. Bên cạnh đó, đội ngũ đã có trên 2 năm
                    kinh nghiệm sửa chữa laptop. Với thành tích học tập tốt và
                    kinh nghiệm đã có, đội ngũ cam kết sẽ đưa tới các dịch vụ
                    đảm bảo chất lượng, đầy đủ quy trình các bước và sẽ hoàn
                    tiền 100% nếu đội ngũ không hoàn thành được dịch vụ mà khách
                    hàng cần cung cấp.
                </p>
                <p className="px-10 indent-5">
                    Trong quá trình phát triển, khi đơn hàng tăng, để đảm bảo
                    tiến độ sửa chữa, nguồn lực của dự án sẽ được mở rộng. Hệ
                    thống ULAP sẽ thông báo tuyển dụng các bạn sinh viên UET
                    khác học lực tốt và có kinh nghiệm sửa chữa qua các trang
                    thông tin truyền thông.
                </p>
                <p className="px-10 font-semibold italic">
                    Kỹ thuật viên sửa chữa của ULAP:
                </p>
                <div>
                    <div className="flex border-solid border-blue-500 rounded-3xl mb-3">
                        <img
                            className="w-1/3 pr-10 pl-3 py-2"
                            src={tsvphamtungthuy}
                            alt="pham-tung-thuy"
                        />
                        <div>
                            <div className="flex">
                                <span className="font-medium italic w-1/5">
                                    Khoa:
                                </span>
                                <span className="w-4/5">
                                    Công nghệ Thông tin
                                </span>
                            </div>
                            <div className="flex">
                                <span className="font-medium italic w-1/5">
                                    Hệ:
                                </span>
                                <span className="w-4/5">Chính quy</span>
                            </div>
                            <div className="flex">
                                <span className="font-medium italic w-1/5">
                                    Khóa học:
                                </span>
                                <span className="w-4/5">QH 2021-S</span>
                            </div>
                            <div className="flex">
                                <span className="font-medium italic w-1/5">
                                    GPA:
                                </span>
                                <span className="w-4/5">3.7</span>
                            </div>
                            <div className="flex">
                                <span className="font-medium italic w-1/5">
                                    Kinh nghiệm:
                                </span>
                                <span className="w-4/5">
                                    3 năm sửa chữa laptop{" "}
                                </span>
                            </div>
                            <div className="flex">
                                <span className="font-medium italic w-1/5">
                                    Thành tích:
                                </span>
                                <span className="w-4/5">
                                    Giải ba công trình Sinh viên nghiên cứu khoa
                                    học cấp Trường Đại học Công Nghệ (Công
                                    trình: Tối ưu RAG và ứng dụng trong xây dựng
                                    hệ thống tư vấn pháp luật)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex border-solid border-blue-500 rounded-3xl mb-3">
                        <img
                            className="w-1/3 pr-10 pl-3 py-2"
                            src={tsvdangminhkhoi}
                            alt="dang-minh-khoi"
                        />
                        <div>
                            <div className="flex">
                                <span className="font-medium italic w-1/5">
                                    Khoa:
                                </span>
                                <span className="w-4/5">
                                    Công nghệ Thông tin
                                </span>
                            </div>
                            <div className="flex">
                                <span className="font-medium italic w-1/5">
                                    Hệ:
                                </span>
                                <span className="w-4/5">Chính quy</span>
                            </div>
                            <div className="flex">
                                <span className="font-medium italic w-1/5">
                                    Khóa học:
                                </span>
                                <span className="w-4/5">QH 2021-S</span>
                            </div>
                            <div className="flex">
                                <span className="font-medium italic w-1/5">
                                    GPA:
                                </span>
                                <span className="w-4/5">3.4</span>
                            </div>
                            <div className="flex">
                                <span className="font-medium italic w-1/5">
                                    Kinh nghiệm:
                                </span>
                                <span className="w-4/5">
                                    2 năm sửa chữa laptop
                                </span>
                            </div>
                            <div className="flex">
                                <span className="font-medium italic w-1/5">
                                    Thành tích:
                                </span>
                                <span className="w-4/5">
                                    Giải ba công trình Sinh viên nghiên cứu khoa
                                    học cấp Trường Đại học Công Nghệ (Công
                                    trình: Tối ưu RAG và ứng dụng trong xây dựng
                                    hệ thống tư vấn pháp luật)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-16">
                    <div className="flex border-solid border-blue-500 rounded-3xl">
                        <img
                            className="w-1/3 pr-10 pl-3 py-2"
                            src={tsvbuituannghia}
                            alt="bui-tuan-nghia"
                        />
                        <div>
                            <div className="flex">
                                <span className="font-medium italic w-1/5">
                                    Khoa:
                                </span>
                                <span className="w-4/5">
                                    Công nghệ Thông tin
                                </span>
                            </div>
                            <div className="flex">
                                <span className="font-medium italic w-1/5">
                                    Hệ:
                                </span>
                                <span className="w-4/5">Chính quy</span>
                            </div>
                            <div className="flex">
                                <span className="font-medium italic w-1/5">
                                    Khóa học:
                                </span>
                                <span className="w-4/5">QH 2021-S</span>
                            </div>
                            <div className="flex">
                                <span className="font-medium italic w-1/5">
                                    GPA:
                                </span>
                                <span className="w-4/5">3.45</span>
                            </div>
                            <div className="flex">
                                <span className="font-medium italic w-1/5">
                                    Kinh nghiệm:
                                </span>
                                <span className="w-4/5">
                                    2 năm sửa chữa laptop
                                </span>
                            </div>
                            <div className="flex">
                                <span className="font-medium italic w-1/5">
                                    Thành tích:
                                </span>
                                <span className="w-4/5">
                                    Giải ba công trình Sinh viên nghiên cứu khoa
                                    học cấp Trường Đại học Công Nghệ (Công
                                    trình: Bundle Recommendation with Item
                                    Causation-enhanced Multi-view Learning)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
