const Footer = () => {
  return (
    <footer className="bg-green-primary text-white pb-2 fixed bottom-0 left-0 right-0 z-[999999999]">
      <div className="container mx-auto flex items-center justify-center px-4 pt-5">
        <img src="/image/logo-footer.png" width={40} alt="Logo" />
        <div className="text-white text-sm font-bold text-center pl-3">
          {/* <span className="pr-3">Logo</span> */}
          <span>&copy;2023 Dinas Pertanian Kabupaten Ngawi</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
