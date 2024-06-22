// components
import SectionHeader from "./SectionHeader";

// import swiper for slider
import { Swiper } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

const SectionContent = ({ title, children }) => {
  return (
    <section className="my-6">
      <SectionHeader title={title} />

      {/* swiper wrapper */}
      <div>
        <Swiper
          className="h-auto"
          spaceBetween={15}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            786: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
        >
          {children}
        </Swiper>
      </div>
    </section>
  );
};

export default SectionContent;
