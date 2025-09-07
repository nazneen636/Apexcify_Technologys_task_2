import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Controller } from "swiper/modules";
import quote from "../../assets/quote.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import SectionTitle from "../common/SectionTitle";

const testimonials = [
  {
    id: 1,
    text: "An exceptional frontend developer who turns complex designs into seamless, responsive web applications. Truly professional and creative.",
    name: "Lewis Jones",
    title: "Ceo of Avode Inc",
    image: "/testimonial/1.jpg",
  },
  {
    id: 2,
    text: "Delivers high-quality, user-friendly interfaces with great attention to detail. Always meets deadlines and exceeds expectations.",
    name: "Sarah Brown",
    title: "Marketing Manager",
    image: "/testimonial/2.jpg",
  },
  {
    id: 3,
    text: "Highly skilled in modern web technologies, creating websites that are both visually appealing and highly functional.",
    name: "David Miller",
    title: "Founder, StartupX",
    image: "/testimonial/3.jpg",
  },
];

const Testimonial = () => {
  const [imageSwiper, setImageSwiper] = useState(null);
  const [textSwiper, setTextSwiper] = useState(null);

  return (
    <div className="md:px-24">
      <div className="backdropFilter card relative px-8 py-16 rounded-2xl overflow-hidden mx-auto">
        <div className="absolute left-0 bottom-0 w-full h-full testimonialGradient -z-10"></div>
        <SectionTitle className={"mb-5"} titleText={"Testimonial"} />

        {/* External arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-5 flex items-center gap-3 z-30">
          <button className="prev hover:bg-[#ffffff3a] hover:text-yellow-200 p-2 bg-[#0000005e] rounded-full text-white text-lg transition-all">
            <MdArrowBackIosNew />
          </button>
          <button className="next hover:bg-[#ffffff3a] hover:text-yellow-200 p-2 bg-[#0000005e] rounded-full text-white text-lg transition-all">
            <MdArrowForwardIos />
          </button>
        </div>

        {/* Big faded quote */}
        <span className="absolute text-[18rem] text-white/8 font-bold -bottom-14 left-3 select-none pointer-events-none w-80 opacity-30">
          <img src={quote} alt="" />
        </span>

        {/* Text area */}
        <div className="w-full pb-[300px]">
          {" "}
          {/* padding-bottom = image height to prevent overlap */}
          <Swiper
            onSwiper={setTextSwiper}
            modules={[Controller]}
            controller={{ control: imageSwiper }}
            slidesPerView={1}
            allowTouchMove={false}
            className="text-swiper w-full"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="w-full max-w-full">
                  <p className="text-white text-xl md:text-2xl leading-relaxed">
                    {t.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Fraction pagination */}
          <div className="mt-6">
            <div className="left-pagination text-white font-medium"></div>
          </div>
        </div>

        {/* Image area at bottom-right */}
        <div className="absolute bottom-8 right-8 w-[180px] md:w-[220px]">
          <Swiper
            onSwiper={setImageSwiper}
            controller={{ control: textSwiper }}
            modules={[Navigation, Pagination, Controller]}
            navigation={{ nextEl: ".next", prevEl: ".prev" }}
            pagination={{ el: ".left-pagination", type: "fraction" }}
            slidesPerView={1}
            loop={true}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="relative w-full h-[200px] md:h-[250px] overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="rounded-2xl w-full h-full object-cover shadow-lg"
                  />
                  <div className="absolute left-0 bottom-2 z-20 w-full text-center rounded-b-2xl">
                    <h3 className="text-yellow-200 font-semibold">{t.name}</h3>
                    <p className="text-sm text-yellow-200 ">{t.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
