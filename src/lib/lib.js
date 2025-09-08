import { scale } from "motion";
import {
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaFacebook,
  FaHome,
  FaLinkedinIn,
  FaProjectDiagram,
  FaQuoteLeft,
  FaServicestack,
  FaTasks,
  FaTools,
  FaUser,
  FaUserAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import {
  MdEmail,
  MdQuestionAnswer,
  MdRateReview,
  MdWork,
} from "react-icons/md";
import { TfiGithub } from "react-icons/tfi";

const _ = {};

_.socialMediaItem = [
  {
    id: 1,
    icon: FaXTwitter,
    path: "/",
  },
  {
    id: 2,
    icon: FaLinkedinIn,
    path: "https://www.linkedin.com/in/nazneen636/",
  },
  {
    id: 3,
    icon: FaFacebook,
    path: "https://www.facebook.com/nazneen.nahar.501/",
  },
  {
    id: 4,
    icon: TfiGithub,
    path: "https://github.com/nazneen636/",
  },
];

// menu item
_.menuItem = [
  { id: 1, icon: FaHome, path: "#home", label: "Home" },
  { id: 2, icon: FaUser, path: "#about", label: "About" },
  { id: 3, icon: FaTools, path: "#services", label: "Services" },
  { id: 4, icon: FaBriefcase, path: "#experience", label: "Experience" },
  { id: 5, icon: FaCode, path: "#techstack", label: "Tech Stack" },
  { id: 6, icon: FaProjectDiagram, path: "#project", label: "Projects" },
  { id: 7, icon: FaTasks, path: "#workprocess", label: "Work Process" }, // New
  { id: 8, icon: FaQuoteLeft, path: "#testimonial", label: "Testimonial" }, // New
  { id: 9, icon: FaEnvelope, path: "#contact", label: "Contact" },
];

// for framer motion
// y axis animation
// Parent container variant for stagger
_.container = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 20,
      staggerChildren: 0.2,
    },
  },
};

// Child item variant
_.item = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

// x axis animation
_.x_container = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      // stiffness: 60,
      damping: 20,
      staggerChildren: 0.2,
    },
  },
};

_.x_item = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

// word animation
_.wordAnimContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

_.sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay each word
    },
  },
};
_.word = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
export default _;
