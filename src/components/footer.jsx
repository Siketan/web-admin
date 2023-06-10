const Footer = () => {
    return (
        <footer className="bg-white py-4 fixed bottom-0 left-0 right-0">
            <hr className="border-t-slate-300" />
            <div className="container mx-auto flex items-center justify-center px-4 pt-5">
                <img src="/image/logo.png" width={50} alt="Logo" />
                <div className="text-black text-base font-bold text-center pl-3">
                    {/* <span className="pr-3">Logo</span> */}
                    <span>&copy;2023 SIKETAN</span>
                </div>
            </div>
        </footer>
    )
}
export default Footer