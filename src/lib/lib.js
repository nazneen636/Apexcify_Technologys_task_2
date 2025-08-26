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
export default _;
