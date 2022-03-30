import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";
import "./style.css";

const Hero = () => {
  return (
    <section>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        modules={[EffectFade, Navigation]}
        className="mySwiper w-full "
      >
        <SwiperSlide>
          <div className="relative font-poppins h-full">
            <div className="absolute left-[1%] md:left-[3%]  top-[30%] text-left lg:left-[10%] space-y-9">
              <h2 className="text-2xl sm:text-3xl text-[#666] ">
                Women Collection 2018
              </h2>
              <h1 className="text-5xl sm:text-7xl font-black  font-playfair text-[#302f2f]">
                NEW SEASON
              </h1>
              <button className="py-2 px-6 hover:bg-black transition  duration-300 ease-in-out bg-[#717fe0] text-white rounded-full ">
                Shop Now
              </button>
            </div>
            <div>
              <img src="/overlay-girl.webp" alt="overlay-girl" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative font-poppins">
            <div className="absolute left-[1%] md:left-[3%]  top-[30%] text-left lg:left-[10%] space-y-9">
              <h2 className="text-2xl sm:text-3xl text-[#666]">
                Men New-Season
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-playfair text-[#302f2f]">
                JACKET & COATS
              </h1>
              <button className="py-2 px-6 hover:bg-black transition duration-300 ease-in-out bg-[#717fe0] text-white rounded-full ">
                Shop Now
              </button>
            </div>
            <div>
              <img src="/overlay-boy.webp" alt="overlay-boy" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative font-poppins">
            <div className="absolute left-[1%] md:left-[3%]  top-[30%] text-left lg:left-[10%] space-y-9">
              <h2 className="text-2xl sm:text-3xl text-[#666]">
                Men Collection 2018
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl  font-playfair font-black text-[#302f2f]">
                NEW ARRIVALS
              </h1>
              <button className=" py-2 px-6 hover:bg-black transition duration-300 ease-in-out bg-[#717fe0] text-white rounded-full ">
                Shop Now
              </button>
            </div>
            <div>
              <img src="/overlay-boy2.webp" alt="overlay-boy2" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
