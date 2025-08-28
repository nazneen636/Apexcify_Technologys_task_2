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
// Parent container variant for stagger
_.container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // each child animates after 0.3s
    },
  },
};

// Child item variant
_.item = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

_.wordAnimContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};
_.wordAnimation = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};
export default _;
