import ProjectCard from "../../common/ProjectCard";
import { assets } from "../../../helpers/assetProvider";

const projectItem = [
  {
    id: 1,
    name: "Fresh Fruits",
    description: "",
    image: assets.fresh,
    link: "https://fresh-fruit-one.vercel.app/",
  },
  {
    id: 2,
    name: "VIP Yacht",
    description: "",
    image: assets.fresh,
    link: "https://vip-yacht-project.vercel.app/",
  },
  {
    id: 3,
    name: "Dashboard",
    description: "",
    image: assets.fresh,
    link: "https://delivery-app-xi-ten.vercel.app/",
  },
  {
    id: 4,
    name: "Fresh Fruits",
    description: "",
    image: assets.fresh,
    link: "https://fresh-fruit-one.vercel.app/",
  },
];

const Project = () => {
  return (
    <div className="mt-20 bg-gray-800 rounded-xl px-5 py-6">
      <ProjectCard
        alt=""
        src={assets.fresh}
        title="Project 1"
        description="this is first project"
        github="github link"
        liveLink="live link"
      />
    </div>
  );
};

export default Project;
