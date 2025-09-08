import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";

import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaCloudUploadAlt,
} from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";

const processSteps = [
  {
    id: 1,
    icon: <FaSearch className="text-5xl" />,
    title: "Research & Planning",
    points: [
      "Understand the project requirements",
      "Analyze the client’s needs and target audience",
      "Create wireframes or sketches",
    ],
  },
  {
    id: 2,
    icon: <FaPencilRuler className="text-5xl" />,
    title: "Design",
    points: [
      "Design high-fidelity mockups using Figma/Adobe XD",
      "Focus on responsive and user-friendly UI",
    ],
  },
  {
    id: 3,
    icon: <FaCode className="text-5xl" />,
    title: "Development",
    points: [
      "Convert designs into code (HTML, CSS, React, Next.js)",
      "Implement animations, interactivity, and responsiveness",
    ],
  },
  {
    id: 4,
    icon: <FaBug className="text-5xl" />,
    title: "Testing & Optimization",
    points: [
      "Test across devices and browsers",
      "Optimize performance and accessibility",
    ],
  },
  {
    id: 5,
    icon: <FaCloudUploadAlt className="text-5xl" />,
    title: "Deployment & Maintenance",
    points: [
      "Deploy to Netlify, Vercel, or GitHub Pages",
      "Make updates and maintain code",
    ],
  },
];

const WorkProcess = () => {
  return (
    <div className="relative">
      <SectionTitle className="mb-10" titleText={"Work Process"} />

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1.5}
        spaceBetween={20}
        centeredSlides={false}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="process"
        breakpoints={{
          320: { slidesPerView: 1.1 },
          640: { slidesPerView: 1.3 },
          1024: { slidesPerView: 1.5 },
        }}
      >
        {processSteps.map((step) => (
          <SwiperSlide key={step.id}>
            <div className="rounded-2xl card px-6 py-8 flex flex-col min-h-[340px] workProcessGradient border-2 border-[#09568ac5]">
              {/* Step number + Icon + Title */}
              <div className="flex  justify-between ">
                <div className="text-gray-300 font-bold text-sm bg-gray-600 rounded-full px-3 py-1 h-fit">
                  Step {step.id}
                </div>
                <div className="bg-gradient-to-l text-white from-cyan-600 to-yellow-500 p-7 flex items-center justify-center rounded-full shadow-md">
                  {step.icon}
                </div>
              </div>
              <h2 className="mt-5 mb-3 text-xl md:text-3xl font-semibold">
                {step.title}
              </h2>

              {/* Bullet points */}
              <ul className="list-disc list-inside text-gray-300 text-[10px] md:text-sm space-x-1 md:space-y-3 mt-3">
                {step.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}

        <div className="process-scrollbar" slot="container-end"></div>
      </Swiper>
    </div>
  );
};

export default WorkProcess;
