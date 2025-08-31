import { assets } from "../../helpers/assetProvider";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/scrollbar";
import "swiper/css";
// import "../../index.css";

// import required modules
import { Scrollbar, Autoplay } from "swiper/modules";

const techItem = [
  {
    id: 1,
    name: "HTML",
    image: assets.html,
  },
  {
    id: 2,
    name: "CSS",
    image: assets.css,
  },
  {
    id: 3,
    name: "Bootstrap",
    image: assets.bootstrap,
  },
  {
    id: 4,
    name: "Tailwind",
    image: assets.tailwind,
  },
  {
    id: 5,
    name: "JS",
    image: assets.js,
  },
  {
    id: 6,
    name: "React.js",
    image: assets.react,
  },
  {
    id: 7,
    name: "Redux",
    image: assets.redux,
  },
  {
    id: 8,
    name: "TypeScript",
    image: assets.typescript,
  },
  {
    id: 9,
    name: "Next.js",
    image: assets.nextjs,
  },
  {
    id: 10,
    name: "Node.js",
    image: assets.nodejs,
  },
  {
    id: 11,
    name: "Express.js",
    image: assets.express,
  },
  {
    id: 12,
    name: "MongoDB",
    image: assets.mongodb,
  },
  {
    id: 13,
    name: "Firebase",
    image: assets.firebase,
  },
  {
    id: 14,
    name: "Figma",
    image: assets.figma,
  },
];

const TechStack = () => {
  return (
    <div className="mt-28  relative">
      <h1 className="text-5xl font-semibold text-center mb-8">
        Tech S
        <span className="bg-gradient-to-r  to-yellow-200 from-cyan-300 bg-clip-text text-transparent">
          tac
        </span>
        k
      </h1>
      <Swiper
        modules={[Scrollbar, Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={true} // keep active slide in center
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        scrollbar={{ el: ".tech-scrollbar", hide: false, draggable: true }}
        className="tech"
      >
        {techItem?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="rounded-md card px-6 py-8 bg-gray-800 flex flex-col items-center justify-center">
              <h2 className="mb-3 text-xl">{item.name}</h2>
              <div className="w-24 h-24 bg-gray-100 p-8 rounded-md flex items-center justify-center mb-3">
                <img
                  src={item.image}
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="tech-scrollbar" slot="container-end"></div>
      </Swiper>
    </div>
  );
};

export default TechStack;

{
  /* <div className="mt-24">
  <div className="grid grid-cols-4 gap-4 ">
    {techItem?.map((item) => (
      <div
        key={item.id}
        className="rounded-md shadow shadow-gray-50 px-6 py-4 bg-gray-800 flex flex-col items-center justify-center"
      >
        <h2 className="mb-3 text-xl">{item.name}</h2>
        <div className="w-32 h-32 bg-gray-900 p-8 rounded flex items-center justify-center">
          <img src={item.image} alt="" />
        </div>
      </div>
    ))}
  </div>
</div>; */
}
