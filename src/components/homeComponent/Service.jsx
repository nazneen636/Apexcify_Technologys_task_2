import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaGlobe,
  FaPaintBrush,
  FaReact,
  FaRedo,
  FaBolt,
  FaTools,
} from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";
import lib from "../../lib/lib";
const services = [
  {
    id: "01",
    title: "Responsive Web Design",
    icon: <FaGlobe className="text-white text-lg" />,
    details: [
      "Mobile-first, cross-device friendly layouts",
      "Clean and modern design principles",
      "Focus on user experience (UX)",
    ],
  },
  {
    id: "02",
    title: "Custom UI Development",
    icon: <FaPaintBrush className="text-white text-lg" />,
    details: [
      "Pixel-perfect conversion from Figma/Adobe XD",
      "Tailored components using React & Tailwind CSS",
      "Interactive and user-friendly elements",
    ],
  },
  {
    id: "03",
    title: "React.js / Next.js Development",
    icon: <FaReact className="text-white text-lg" />,
    details: [
      "Building dynamic, scalable web applications",
      "Server-side rendering (SSR) & SEO-friendly pages",
      "State management (Redux, Context API)",
    ],
  },
  {
    id: "04",
    title: "Website Redesign",
    icon: <FaRedo className="text-white text-lg" />,
    details: [
      "Transform outdated designs into modern UI",
      "Improve usability & navigation flow",
      "Enhance brand consistency and style",
    ],
  },
  {
    id: "05",
    title: "Performance Optimization",
    icon: <FaBolt className="text-white text-lg" />,
    details: [
      "Faster load times & smooth interactions",
      "SEO-friendly code structure",
      "Best practices for accessibility",
    ],
  },
  {
    id: "06",
    title: "Website Maintenance",
    icon: <FaTools className="text-white text-lg" />,
    details: [
      "Regular updates and bug fixes",
      "Security checks & performance monitoring",
      "Adding new features as needed",
    ],
  },
];

export default function Services() {
  const [openService, setOpenService] = useState("01");

  const toggleService = (id) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <div className="backdropFilter card rounded-2xl px-10 py-12 w-full">
      {/* Top Small Label */}
      <SectionTitle className="mb-8" titleText={"Services"} />

      {/* Services List */}
      <motion.div
        variants={lib.x_container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col "
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className={
              services.length - 1 == index
                ? "-[#ffffff31] py-6"
                : "border-b border-b-[#ffffff11] py-6"
            }
            variants={lib.x_item}
          >
            <div
              className="flex items-center gap-5 cursor-pointer"
              onClick={() => toggleService(service.id)}
            >
              {/* Icon - hidden until toggled */}
              {openService === service.id && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="bg-gradient-to-l  to-yellow-500 from-cyan-600 w-8 h-8 flex items-center justify-center rounded-md shadow-md"
                >
                  {service.icon}
                </motion.div>
              )}
              {/* Title */}
              <h3
                className={`text-xl md:text-3xl font-bold ${
                  openService === service.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white transition-colors"
                }`}
              >
                {service.title}
                <sup className="ml-1 text-xs text-gray-500">({service.id})</sup>
              </h3>
            </div>

            {/* Toggle Details */}
            <AnimatePresence>
              {openService === service.id && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-12 mt-3 space-y-2 text-xs md:text-sm text-gray-400 list-disc list-inside overflow-hidden"
                >
                  {service.details.map((detail, i) => (
                    <li key={i} className="hover:text-white transition-colors">
                      {detail}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-gray-500 mt-10">
        <span>
          • Available to <span className="text-white underline">Worldwide</span>
        </span>
        <a href="#contact" className="hover:underline flex items-center gap-1">
          Contact me ↗
        </a>
      </div>
    </div>
  );
}
