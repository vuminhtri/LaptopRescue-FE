import { useState } from "react";
import service from "../assets/dich vu.png";
import repairprocess from "../assets/quy trinh sua chua.jpg";
import { useDispatch } from "react-redux";
import { createOrders } from "../redux/ordersSlice";

const Home = () => {
    const [order, setOrder] = useState({
        name: "",
        email: "",
        phoneNum: "",
        description: "",
    });
    const [tocVisible, setTocVisible] = useState(true);

    const generateTableOfContent = () => {
        const tocContainer = document.getElementById("toc-content");
        const headings = document.querySelectorAll("h2");

        headings.forEach((heading) => {
            const id = heading.id;
            const text = heading.textContent;

            const listItem = document.createElement("div");
            const link = document.createElement("a");
            link.href = `#${id}`;
            link.textContent = `${text}`;
            link.classList.add("no-underline", "text-gray-700");
            listItem.appendChild(link);
            listItem.classList.add("ml-10");
            listItem.classList.add("no-underline");
            listItem.classList.add("text-black");

            tocContainer.appendChild(listItem);
        });
    };
    window.onload = generateTableOfContent;

    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setOrder((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleScrollToForm = () => {
        const formBooking = document.getElementById("formBooking");
        formBooking.scrollIntoView({ behavior: "smooth" });
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

    const handleToggleTocVisibility = () => {
        const tocContent = document.getElementById("toc-content");
        if (tocVisible) {
            tocContent.style.display = "none";
        } else {
            tocContent.style.display = "block";
        }
        setTocVisible(!tocVisible)
    };

    return (
        <div
            className="flex justify-center min-w-full h-full bg-cover bg-slate-300"
        >
            <div className="w-2/3 h-full bg-slate-100 pb-20">
                <h1 className="text-center text-4xl font-bold mb-4">
                    ULAP - Sửa chữa Laptop cho sinh viên
                </h1>
                <div className="ml-10 w-3/5 my-5 relative bg-slate-200 rounded-lg">
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
                                <span className="font-bold text-lg">
                                    Mục lục nội dung
                                </span>
                                <span className="text-blue-600 cursor-pointer" onClick={handleToggleTocVisibility}>
                                    {tocVisible ? "[ẩn]" : "[hiện]"}
                                </span>
                            </div>
                        </div>
                        <div id="toc-content">
                            {/* Nội dung của table of content */}
                        </div>
                    </div>
                </div>
                <h2
                    className="pt-4 mx-8"
                    id="1-Gioi-thieu-ve-dich-vu-sua-chua-laptop-cho-ULISer"
                >
                    1. Giới thiệu về hệ thống ULAP - ULIS Laptop Repair
                </h2>
                <p className="text-[17px] leading-6 mx-[60px] my-3">
                    ULAP là trang web được lập ra để cung cấp các dịch vụ tư vấn
                    và sửa chữa laptop cho các bạn trường Đại học Ngoại ngữ -
                    Đại học Quốc gia Hà Nội, được lập ra bởi các bạn sinh viên
                    trường Đại học Công nghệ - Đại học Quốc gia Hà Nội. Hệ thống
                    cung cấp đa dạng các dịch vụ tư vấn và sửa chữa laptop nói
                    riêng và máy tính cá nhân (gồm máy tính để bàn và máy tính
                    xách tay) nói chung với các phần chính: Lỗi phần cứng, lỗi
                    phần mềm, lỗi driver, lỗi kết nối mạng và một số các lỗi
                    khác.
                </p>
                <h2 className="pt-4 mx-8" id="2-Muc-dich-cua-trang-web">2. Mục đích của trang web</h2>
                <p className="text-[17px] leading-6 mx-[60px] my-3">
                    Laptop đã trở thành một công cụ hỗ trợ học tập không thể
                    thiếu của các bạn sinh viên với nhiều lợi ích mà nó mang lại
                    như tìm kiếm nguồn thông tin, thiết kế các bài thuyết trình,
                    làm bài tập và nộp, ghi chép khoa học bài giảng,... Vì vậy,
                    ngày nay hầu hết các sinh viên đều sở hữu cho mình ít nhất
                    một chiếc laptop. Tuy nhiên, trung bình một năm, laptop sẽ
                    gặp 1 - 2 lỗi và nhu cầu tìm kiếm bên cung cấp dịch vụ sửa
                    chữa của các bạn làm sao vừa cung cấp chất lượng vừa có giá
                    cả hợp lí cho túi tiền sinh viên lại tăng thêm. <br />
                    Hiểu được điều đó, ULAP đã được lập ra để phục vụ riêng đối
                    tượng sinh viên trường Đại học Ngoại ngữ - Đại học Quốc gia
                    Hà Nội. Với việc sửa chữa được đảm nhận bởi các sinh viên
                    trường Đại học Công nghệ - Đại học Quốc gia Hà Nội, các bạn
                    sẽ có một cơ hội làm việc phù hợp đúng chuyên ngành, định
                    hướng công việc, vẫn có nguồn thu nhập kiếm được từ khoản
                    tiền công hợp lý khi sửa chữa laptop. Điều này phù hợp với
                    các nhu cầu từ hai phía đối tượng sinh viên của Trường Đại
                    học Quốc Gia Hà Nội.
                </p>
                <h2 className="pt-4 mx-8" id="3-Dich-vu-cua-ULAP-cung-cap">3. Dịch vụ của ULAP cung cấp</h2>
                <div className="w-full flex justify-center">
                    <img
                        className="w-4/5"
                        src={service}
                        alt="bang-gia"
                    />
                </div>
                <h2 className="pt-4 mx-8" id="4-Tai-sao-ban-lai-lua-chon-dich-vu-cua-ULAP">
                    4. Tại sao bạn lại lựa chọn dịch vụ của ULAP?
                </h2>
                <ul className="text-[17px] leading-6 mx-[60px] my-3">
                    <li className="my-4">
                        <p className="font-medium">
                            Phục vụ nhanh, liên hệ ngay sau khi bạn book lịch
                        </p>
                        <p className="ml-5 font-normal">
                            Đội ngũ nhân viên sẽ kiểm tra danh sách book lịch
                            thường xuyên và sớm liên hệ bạn sau 15-30p đặt lịch
                            sửa chữa.
                        </p>
                    </li>
                    <li className="my-4">
                        <p className="font-medium">
                            Đội ngũ sửa chữa uy tín, tận tâm, chu đáo là sinh
                            viên Đại học Công nghệ - Đại học Quốc Gia Hà Nội
                        </p>
                        <p className="ml-5 font-normal">
                            Đội ngũ các bạn sinh viên sửa chữa là nhóm 3 bạn gồm
                            2 sinh viên năm cuối chuyên ngành Kỹ thuật máy tính
                            và 1 sinh viên năm cuối chuyên ngành Khoa học máy
                            tính với thành tích học tập từ Khá trở lên, đã có
                            kinh nghiệm đồng thời được hướng dẫn đào tạo để đảm
                            bảo thực hiện công việc chuyên môn chính xác, chuyên
                            nghiệp. Với thành tích học tập tốt và kinh nghiệm
                            kiểm chứng kỹ càng, đội ngũ cam kết sẽ đưa tới các
                            dịch vụ đảm bảo chất lượng.
                        </p>
                    </li>
                    <li className="my-4">
                        <p className="font-medium">
                            Giá cả hợp lý cho sinh viên
                        </p>
                        <p className="ml-5 font-normal">
                            Đặc biệt ưu đãi giảm 10-20% khi là sinh viên của
                            trường Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội.
                            Các bạn khi thanh toán yêu cầu xác minh với thẻ sinh
                            viên để có thể được giảm giá nhaa~ 😘🥰🥰 !
                        </p>
                    </li>
                    <li className="my-4">
                        <p className="font-medium">
                            Linh kiện, bộ phận thay thế cho laptop cam kết chính
                            hãng
                        </p>
                        <p className="ml-5 font-normal">
                            Chúng tôi cam kết các linh kiện, bộ phận thay thế
                            cho laptop đảm bảo chính hãng và hỗ trợ phù hợp với
                            các tầm giá cho sinh viên.
                        </p>
                    </li>
                    <li className="my-4">
                        <p className="font-medium">
                            Cam kết mang đến dịch vụ sửa laptop tốt nhất, hợp lí
                            nhất
                        </p>
                        <p className="ml-5 font-normal">
                            Đội ngũ mong muốn và luôn cố gắng đem đến cho các
                            bạn dịch vụ chuyên nghiệp, nhiệt tình, nhanh chóng,
                            uy tín và bảo mật thông tin cho khách hàng là các
                            bạn sinh viên.
                        </p>
                    </li>
                    <li className="my-4">
                        <p className="font-medium">
                            Hỗ trợ bảo hành lâu dài, sẵn sàng trả lời khách hàng
                            các vấn đề về dịch vụ đã sử dụng
                        </p>
                        <p className="ml-5 font-normal">
                            Thời gian bảo hành sau sửa chữa lâu dài - sau 3
                            tháng và luôn sẵn lòng hỗ trợ nếu như khách hàng có
                            yêu cầu, câu hỏi.
                        </p>
                    </li>
                </ul>
                <h2 className="pt-4 mx-8" id="5-Quy-trinh-sua-chua">5. Quy trình sửa chữa</h2>
                <div className="w-full flex justify-center">
                    <img
                        className="w-4/5"
                        src={repairprocess}
                        alt="quy-trinh-sua-chua"
                    />
                </div>
                {/* <div className="text-[17px]">

                </div> */}
                <div className="text-[17px] leading-6 mx-20 my-3 pt-2 indent-5">
                    <p>
                        Quy trình nhận sửa chữa laptop tại ULAP từ khi nhận máy
                        tới bàn giao máy bao gồm 9 bước rõ ràng.
                    </p>
                    <p>
                        Để các bạn sinh viên được nhận các dịch vụ với chất
                        lượng tốt nhất, bất kì một trường hợp lỗi nào ghi nhận
                        trên hệ thống sẽ đều được thực hiện đầy đủ quy trình như
                        sau:
                    </p>
                    <ul className="ml-5 mr-10">
                        <li>
                            <strong>Bước 1:</strong> Sinh viên phát hiện ra lỗi,
                            đăng ký book lịch trên web, điền đầy đủ thông tin
                            liên lạc: Tên, địa chỉ, số điện thoại/ zalo và
                            email; điền mô tả lỗi.
                        </li>
                        <li>
                            <strong>Bước 2:</strong> Admin hệ thống nhận lịch
                            book, phân chia đơn hàng cho kỹ thuật viên phù hợp.
                        </li>
                        <li>
                            <strong>Bước 3:</strong> Kỹ thuật viên liên hệ với
                            khách hàng, hẹn địa điểm giao máy. Địa điểm mặc
                            định: Trường Đại học Ngoại ngữ.
                        </li>
                        <li>
                            <strong>Bước 4:</strong> Kỹ thuật viên kiểm tra tổng
                            quan tình trạng máy miễn phí trực tiếp cho khách
                            hàng.
                        </li>
                        <li>
                            <strong>Bước 5:</strong> Kỹ thuật viên báo thời gian
                            và chi phí các phương án sửa chữa laptop để khách
                            hàng lựa chọn phương án phù hợp nhất. Nếu các lỗi
                            của laptop là đơn giản có thể khắc phục sửa chữa
                            được ngay, KTV sẽ sửa lấy ngay cho khách hàng. Còn
                            đối với các lỗi máy phức tạp hơn như lỗi ổ cứng, lỗi
                            bàn phím,... cần phải có thời gian để sửa chữa, KTV
                            sẽ giữ máy lại để xử lý.
                        </li>
                        <li>
                            <strong>Bước 6:</strong> Khách hàng đồng ý giao máy
                            cho KTV, KTV sẽ hướng dẫn bạn ký tên lên các thiết
                            bị linh kiện bên trong như: CPU, RAM, main,... kèm
                            theo{" "}
                            <span className="bg-orange-400">
                                biên bản chi tiết
                            </span>{" "}
                            <span className="underline">để yên tâm hơn</span>{" "}
                            khi giao máy. Nếu khách hàng không đồng ý KTV giữ
                            máy hoặc không đồng ý với những phương án sửa chữa
                            KTV đưa ra, KTV sẽ lắp lại nguyên trạng máy và trao
                            trả cho khách hàng. Trong trường hợp
                        </li>
                        <li>
                            <strong>Bước 7:</strong> KTV tiến hành sửa chữa
                            laptop cho khách hàng. Trong quá trình sửa chữa, nếu
                            có vấn đề phát sinh, KTV sẽ liên hệ trực tiếp để
                            trao đổi với khách hàng.
                        </li>
                        <li>
                            <strong>Bước 8:</strong> Sau khi sửa chữa xong
                            laptop, KTV liên hệ thông báo kết quả trực tiếp và
                            hẹn địa điểm trả máy cho khách hàng thông qua số
                            điện thoại/ zalo, hoặc email.
                        </li>
                        <li>
                            <strong>Bước 9:</strong> Khách hàng nhận lại laptop,
                            kiểm tra lại máy dưới sự hướng dẫn của KTV bao gồm:
                            Kiểm tra tình trạng máy (có nguyên vẹn không?), kiểm
                            tra lỗi (lỗi đã được khắc phục triệt để chưa? có
                            phát sinh lỗi khác không?...), kiểm tra linh kiện
                            (có đúng là của máy không? linh kiện còn nguyên vẹn
                            chữ ký không?...). Sau khi đã test thử và không có
                            vấn đề gì, khách hàng{" "}
                            <span className="bg-orange-400">
                                nhận
                                <span className="text-red-600">
                                    {" "}
                                    tem phiếu bảo hành
                                </span>
                            </span>
                            , thanh toán chi phí và{" "}
                            <span className="bg-orange-400">
                                nhận hóa đơn
                            </span>{" "}
                            từ KTV.
                        </li>
                    </ul>
                    <p>
                        Với 9 bước sửa chữa laptop uy tín chuyên nghiệp, ULAP
                        luôn sẵn sàng đáp ứng tất cả các yêu cầu về sửa chữa
                        Laptop, máy tính chuyên nghiệp cho sinh viên. Hệ thống
                        cam kết mang lại những chất lượng dịch vụ tốt nhất tới
                        người dùng. Nếu có bất kỳ băn khoăn hay thắc mắc nào vui
                        lòng gọi 0396 246 882 để được giải đáp nhanh chóng và
                        tận tình nhất.
                    </p>
                    <p className="font-medium italic text-[19px]">
                        ULAP rất hân hạnh được sửa chữa laptop, góp phần nâng
                        cao phương thức học tập của các bạn!
                    </p>
                </div>
                <h2 className="pt-4 mx-8" id="6-Cam-ket-cua-ULAP">6. Cam kết của ULAP</h2>
                <ul className="text-[17px] leading-6 mx-[60px] my-3">
                    <li className="my-4 font-medium">
                        Thái độ phục vụ khách hàng sửa laptop nhiệt tình, tận
                        tâm.
                    </li>
                    <li className="my-4 font-medium">
                        Kiểm tra kỹ lưỡng, chuẩn đoán đúng bệnh và báo đúng giá.
                    </li>
                    <li className="my-4 font-medium">
                        Sửa laptop lấy ngay tại chỗ, trong trường hợp cần thời
                        gian chờ đội ngũ sẽ thông báo nhận máy tới khách hàng.
                    </li>
                    <li className="my-4 font-medium">
                        Quy trình nhận sửa laptop được thực hiện nghiêm ngặt
                        dưới sự đồng ý và ký xác nhận linh kiện trên laptop của
                        khách và phiếu nhận máy.
                    </li>
                    <li className="my-4 font-medium">
                        Đảm bảo nguyên vẹn tình trạng của laptop.
                    </li>
                    <li className="my-4 font-medium">
                        Mọi thay đổi, sửa laptop đều phải được sự đồng ý trước
                        của khách hàng.
                    </li>
                    <li className="my-4 font-medium">
                        Cam kết tuyệt đối bảo mật dữ liệu trên laptop của khách
                        hàng.
                    </li>
                </ul>
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
                <div className="fixed bottom-20 hover:bottom-16 right-5 flex flex-col items-center">
                    <svg
                        className="cursor-pointer"
                        fill="#000000"
                        height="50px"
                        width="50px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlSpace="preserve"
                        onClick={handleScrollToForm}
                    >
                        <g
                            id="SVGRepo_bgCarrier"
                            strokeWidth={0}
                        ></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                                {" "}
                                <g>
                                    {" "}
                                    <g>
                                        {" "}
                                        <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333 z"></path>{" "}
                                        <path d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17 l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17 C369.42,189.917,355.913,189.917,347.582,198.248z"></path>{" "}
                                    </g>{" "}
                                </g>{" "}
                            </g>{" "}
                        </g>
                    </svg>
                    <p className="text-gray-500 text-sm">
                        Đi đến biểu mẫu đặt lịch
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
