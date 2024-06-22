//  swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// datas
import { imageItems } from "../data/data";
import { icons } from "../data/Icons";

const Hero = () => {
  return (
    <div className="mt-10">
      <div className="container">
        <div className="flex flex-col-reverse gap-4 lg:flex-row">
          {/* images */}
          <div className="flex items-center gap-4 w-full lg:w-[30%] lg:flex-col [&>div]:h-full [&>div]:shadow-lg">
            <div>
              <img
                src="/images/main-banner-top.jpg"
                alt="hero-image"
                className="w-full h-full rounded-xl"
              />
            </div>
            <div>
              <img
                src="/images/main-bot.gif"
                alt="hero-image"
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>

          {/* slider */}
          <div className="rounded-xl overflow-hidden w-full lg:w-[70%] shadow-lg">
            <Swiper
              slidesPerView={1}
              grabCursor={true}
              loop={true}
              modules={[Pagination, Navigation, Autoplay]}
              breakpoints={{
                0: {
                  navigation: {
                    enabled: false,
                  },
                },
                992: {
                  navigation: {
                    enabled: true,
                    prevEl: ".prev",
                    nextEl: ".next",
                  },
                },
              }}
              autoplay={{
                delay: 3000,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
            >
              {imageItems.map((img) => (
                <SwiperSlide key={img.id} className="h-full">
                  <img src={img.src} alt="slider-img" className="h-full" />
                </SwiperSlide>
              ))}

              {/* hero button wrapper */}
              <button className="prev hidden text-zinc-700 dark:text-white absolute w-8 h-8 bg-white dark:bg-zinc-900 top-1/2 z-10 -translate-y-1/2 lg:grid-center rounded-full left-2">
                {icons.arrowBack}
              </button>
              <button className="next hidden text-zinc-700 dark:text-white absolute w-8 h-8 bg-white dark:bg-zinc-900 top-1/2 z-10 -translate-y-1/2 lg:grid-center rounded-full right-2">
                {icons.arrowForwar}
              </button>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
