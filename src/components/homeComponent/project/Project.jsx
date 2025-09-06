import ProjectCard from "../../common/ProjectCard";
import { assets } from "../../../helpers/assetProvider";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Marquee from "react-fast-marquee";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import {
  FaChartLine,
  FaLaptopCode,
  FaPalette,
  FaRocket,
  FaShoppingCart,
} from "react-icons/fa";
import { SiNextdotjs, SiReact } from "react-icons/si";
import SectionTitle from "../../common/SectionTitle";

const projectItem = [
  {
    id: 1,
    name: "Product Listing",
    description:
      "A modern product listing web app with responsive design, dynamic product grid, and smooth UI built using React and Tailwind CSS.",
    image: assets.product_listing,
    link: "https://apexcify-technologys-product-listin.vercel.app/",
  },
  {
    id: 2,
    name: "Fresh Fruits",
    description:
      "E-commerce website for fresh fruits with a clean UI, cart system, and smooth browsing experience.",
    image: assets.fresh,
    link: "https://fresh-fruit-one.vercel.app/",
  },
  {
    id: 3,
    name: "VIP Yacht",
    description:
      "Luxury yacht booking website featuring a premium design, smooth scrolling, and responsive layouts.",
    image: assets.vip_Yacht,
    link: "https://vip-yacht-project.vercel.app/",
  },
  {
    id: 4,
    name: "Dashboard",
    description:
      "Admin dashboard with interactive charts, analytics, and user-friendly UI built with React and Chart.js.",
    image: assets.dashboard,
    link: "https://delivery-app-xi-ten.vercel.app/",
  },
  {
    id: 5,
    name: "Cilicon E-commerce",
    description:
      "Full-stack e-commerce platform with product management, shopping cart, and secure checkout.",
    image: assets.cilicon,
    link: "https://cyclone-sigma.vercel.app/",
  },
  {
    id: 6,
    name: "Hancok Gaming Website",
    description:
      "Gaming landing page with engaging animations, responsive design, and interactive features.",
    image: assets.hancok,
    link: "https://nazneen636.github.io/Hancok-project/",
  },
  {
    id: 7,
    name: "Guessing Game",
    description:
      "A fun number guessing game with interactive UI and instant feedback built using vanilla JavaScript.",
    image: assets.gussing_game,
    link: "https://cyclone-sigma.vercel.app/",
  },
  {
    id: 8,
    name: "BMI Calculator",
    description:
      "Simple BMI calculator web app with clean design, real-time calculations, and responsive UI.",
    image: assets.bmi,
    link: "https://nazneen636.github.io/BMI-Calculator/",
  },
  {
    id: 9,
    name: "Counter App",
    description:
      "Minimal counter app with increment, decrement, and reset features using React state management.",
    image: assets.counter,
    link: "https://counter-app-mu-ten.vercel.app/",
  },
  {
    id: 10,
    name: "Quiz App",
    description:
      "Interactive quiz app with multiple-choice questions, score tracking, and clean UI.",
    image: assets.quiz,
    link: "https://quiz-app-theta-rosy.vercel.app/",
  },
  {
    id: 11,
    name: "Weather App",
    description:
      "Weather forecasting app that fetches live weather data using API integration and displays results beautifully.",
    image: assets.weather,
    link: "https://weather-app-phi-rose-56.vercel.app/",
  },
];

const Project = () => {
  return (
    <div className="">
      <SectionTitle className="mb-10" titleText={"Projects"} />
      <div className=" mx-auto max-w-[450px] ">
        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover={true}
          className="border-3 border-[#f0c403e0] w-20 py-7 rounded-full shadow-md mb-8 card"
        >
          <span className=" mx-2 flex items-center gap-5 bg-gradient-to-r  to-yellow-200 from-cyan-600 bg-clip-text text-transparent font-semibold text-5xl ">
            <div className="w-3 h-3 rounded-full bg-white"></div> Fast
          </span>
          <span className=" mx-2 flex items-center gap-5 bg-gradient-to-r  to-yellow-200 from-cyan-600 bg-clip-text text-transparent font-semibold text-5xl ">
            <div className="w-3 h-3 rounded-full bg-white"></div> Responsive
          </span>
          <span className=" mx-2 flex items-center gap-5 bg-gradient-to-r  to-yellow-200 from-cyan-600 bg-clip-text text-transparent font-semibold text-5xl ">
            <div className="w-3 h-3 rounded-full bg-white"></div> Scalable
            Design
          </span>
        </Marquee>
      </div>

      <div className="backdropFilter rounded-xl px-8 py-10 relative card">
        {/* <h1 className="text-3xl md:text-5xl font-semibold text-center mb-5 mt-10">
          My Pro
          <span className="bg-gradient-to-r  to-yellow-200 from-cyan-300 bg-clip-text text-transparent">
            ject
          </span>
        </h1> */}
        {/* Custom Navigation Buttons */}
        <div className="absolute top-10 right-8 flex gap-3 z-10">
          <button className="prev cursor-pointer hover:bg-[#ffffff3a] hover:text-yellow-200 p-2 bg-[#0000005e] rounded-full text-white font-bold text-lg transition-all">
            {" "}
            <MdArrowBackIosNew />
          </button>
          <button className="next cursor-pointer hover:bg-[#ffffff3a] hover:text-yellow-200 transition-all p-2 bg-[#0000005e] rounded-full text-white font-bold text-lg">
            <MdArrowForwardIos />
          </button>
        </div>
        <div className="mt-5">
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={{ nextEl: ".next", prevEl: ".prev" }}
            modules={[Pagination, Navigation, Autoplay]}
            loop={true}
            // autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="mySwiper"
          >
            {projectItem?.map((project) => (
              <SwiperSlide className="py-10" key={project?.id}>
                {" "}
                <ProjectCard
                  alt={project?.name}
                  src={project?.image}
                  title={project?.name}
                  description={project?.description}
                  //   github="github link"
                  liveLink={project?.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Project;
