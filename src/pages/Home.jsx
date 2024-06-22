// components
import Header from "../components/Header";
import Hero from "../components/Hero";
import SectionContent from "../components/SectionContent";
import SliderProductBox from "../components/ProductBox";
import Ring from "../components/Ring";
import BlurBox from "../components/BlurBox";
import Footer from "../components/Footer";

// swiper
import { SwiperSlide } from "swiper/react";

// datas
import { allProducts, categorysType } from "../data/data";

const Home = () => {
  return (
    <>
      <Header />

      <Hero />
      
      <main>
        {/* blur box */}
        <BlurBox />

        {/* home main content */}
        <div className="container">
          {/* Special Offer */}
          <SectionContent title="Special Offer">
            {allProducts.map((item) => (
              <SwiperSlide key={item.id}>
                <SliderProductBox {...item} />
              </SwiperSlide>
            ))}
          </SectionContent>

          {/* Newest Products */}
          <SectionContent title="Newest Products">
            {allProducts.map((item) => (
              <SwiperSlide key={item.id}>
                <SliderProductBox {...item} />
              </SwiperSlide>
            ))}
          </SectionContent>

          {/* category banner section */}
          <div className="my-3 flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="rounded-[13px] overflow-hidden">
              <img
                src="/images/category-left.jpg"
                className="w-full h-auto"
                alt="banner"
              />
            </div>
            <div className="rounded-[13px] overflow-hidden">
              <img
                src="/images/category-right.jpg"
                className="w-full h-auto"
                alt="banner"
              />
            </div>
          </div>

          {/* Category  */}
          <div className="py-10 flex-center-center flex-wrap gap-8 lg:justify-between">
            {categorysType.map((cat) => (
              <div
                key={cat.id}
                className="space-y-3 cursor-pointer flex flex-col items-center"
              >
                <Ring borderRadius="50%">
                  <img
                    src={cat.img}
                    className="w-28 h-28 rounded-full relative"
                    alt="category-img"
                  />
                </Ring>
                <p className="text-center text-zinc-700 text-sm md:text-base dark:text-white">
                  {cat.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Home;
