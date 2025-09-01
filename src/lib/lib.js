import { scale } from "motion";
import {
  FaBriefcase,
  FaEnvelope,
  FaFacebook,
  FaHome,
  FaLinkedinIn,
  FaServicestack,
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
    path: "/",
  },
  {
    id: 3,
    icon: FaFacebook,
    path: "/",
  },
  {
    id: 4,
    icon: TfiGithub,
    path: "/",
  },
];

// menu item
_.menuItem = [
  { id: 1, icon: FaHome, path: "#home", label: "Home" },
  { id: 2, icon: GrServices, path: "#services", label: "Services" },
  { id: 3, icon: MdWork, path: "#works", label: "Works" },
  { id: 4, icon: MdRateReview, path: "#testimonial", label: "Testimonial" },
  { id: 5, icon: MdQuestionAnswer, path: "#faq", label: "FAQ" },
  { id: 6, icon: MdEmail, path: "#contact", label: "Contact" },
];

// for framer motion
// y axis animation
// Parent container variant for stagger
_.container = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
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
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
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
