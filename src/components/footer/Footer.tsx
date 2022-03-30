const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        className="bg-[#222] min-h-[20rem] text-white py-8 px-16 "
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          <div className="flex flex-col space-y-3">
            <h1 className="font-bold mb-4">CATEGORIES</h1>
            <h3 className="text-[#666] cursor-pointer hover:text-white w-22">
              Women
            </h3>
            <h3 className="text-[#666] cursor-pointer hover:text-white w-22">
              Men
            </h3>
            <h3 className="text-[#666] cursor-pointer hover:text-white w-22">
              Shoes
            </h3>
            <h3 className="text-[#666] cursor-pointer hover:text-white w-22">
              Watches
            </h3>
          </div>
          <div className="flex flex-col space-y-3">
            <h1 className="font-bold mb-4">HELP</h1>
            <h3 className="text-[#666] cursor-pointer hover:text-white w-22">
              Track Orders
            </h3>
            <h3 className="text-[#666] cursor-pointer hover:text-white w-22">
              Returns
            </h3>
            <h3 className="text-[#666] cursor-pointer hover:text-white w-22">
              Shipping
            </h3>
            <h3 className="text-[#666] cursor-pointer hover:text-white w-22">
              FAQs
            </h3>
          </div>
          <div className="flex flex-col space-y-3">
            <h1 className="font-bold mb-4">GET IN TOUCH</h1>
            <h3 className="text-[#666] cursor-pointer hover:text-white w-30">
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              New York, NY 10018 or call us on (+1) 96 716 6879
            </h3>
          </div>
          <div className="flex flex-col space-y-6">
            <h1 className="font-bold mb-4">NEWSLETTER</h1>
            <input
              type="text"
              placeholder="email@example.com"
              className="border-b-4 border-slate-600 bg-[#222] outline-none py-2 px-2"
            />
            <div>
              <button className="bg-[#717fe0] py-3 px-8 font-semibold text-white rounded-full">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </footer>
      <p className="text-center text-md text-[#747373] bg-[#222] py-2">
        Copyright ©2022 All rights reserved | This template is made with by
        Colorlib
      </p>
    </>
  );
};

export default Footer;
