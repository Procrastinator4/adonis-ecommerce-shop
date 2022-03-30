const Collection = () => {
  return (
    <section
      id="shop"
      className="relative max-w-7xl font-poppins  my-12 mx-auto  py-12 px-4 grid grid-cols-1 sm:gap-8 md:gap-12 sm:grid-cols-2 md:grid-cols-3"
    >
      <div className="relative group">
        <div className="absolute rounded-lg transition duration-300  ease-in-out inset-0 hover:bg-blue-600 hover:opacity-70"></div>
        <h3 className="absolute top-8 left-6 text-2xl group-hover:text-white  font-black cursor-pointer ">
          Women
        </h3>
        <p className="absolute top-16 group-hover:text-white text-[#585858] left-6 text-md">
          Spring Karachi 2022
        </p>
        <img
          src="/women.webp"
          alt="men-collection"
          className="h-full w-full rounded-lg shadow-sm hover:shadow-lg transition duration-150 ease-in "
        />
      </div>
      <div className="relative group">
        <div className="absolute rounded-lg  transition duration-300  ease-in-out inset-0 hover:bg-blue-600 hover:opacity-70"></div>
        <h3 className="absolute top-8 left-3 text-2xl group-hover:text-white  font-black cursor-pointer">
          Men
        </h3>
        <p className="absolute top-16 group-hover:text-white  text-[#585858] left-3 text-md">
          Spring Islamabad 2022
        </p>
        <img
          className="h-full w-full rounded-lg shadow-sm hover:shadow-lg transition duration-150 ease-in "
          src="/men.webp"
          alt="women-collection"
        />
      </div>
      <div className="relative group">
        <div className="absolute rounded-lg transition duration-300  ease-in-out inset-0 hover:bg-blue-600 hover:opacity-70"></div>
        <h3 className="absolute top-8 left-6 text-2xl group-hover:text-white  font-black cursor-pointer">
          Accessories
        </h3>
        <p className="absolute top-16 text-[#585858] group-hover:text-white  left-6 text-md">
          Spring Lahore 2022
        </p>
        <img
          src="/accessories.webp"
          alt="accessories-collection"
          className="h-full w-full rounded-lg shadow-sm hover:shadow-lg transition duration-150 ease-in "
        />
      </div>
    </section>
  );
};

export default Collection;
