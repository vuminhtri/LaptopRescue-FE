import quotation from "../assets/bang gia.jpg"
const Quotation = () => {
    return (
        <div
            className="flex justify-center min-w-full h-[calc(100vh-56px)] bg-cover bg-slate-300"
        >
            <div className="w-3/5 h-full">
                <img
                    className="h-[500px]"
                    src={quotation}
                    alt="bang-gia"
                />
            </div>
        </div>
    );
}

export default Quotation;