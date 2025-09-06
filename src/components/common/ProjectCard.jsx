import { FaGithubAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";

const ProjectCard = ({
  className,
  alt,
  src,
  title,
  description,
  github,
  liveLink,
}) => {
  return (
    <div className="w-full h-auto">
      <div
        className={` border border-[#ffffff73] rounded-2xl overflow-hidden ${className}`}
      >
        <div className="relative p-4 rounded-lg overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="h-[300px] w-full object-cover rounded-lg"
          />
          <Link
            to={liveLink}
            className="absolute w-full h-full bg-[#000000af] left-0 top-0 flex items-center justify-center opacity-0 hover:opacity-100 duration-300 transition-all"
          >
            <div className="w-20 h-20 rounded-full bg-yellow-200 flex items-center justify-center">
              <MdArrowOutward className="text-4xl text-black" />
            </div>
          </Link>
        </div>
        <div className="p-8 flex flex-col gap-5">
          <div className="flex gap-12 items-center">
            <h2 className=" text-xl md:text-3xl flex gap-6 items-center">
              {title}
              <FaArrowRightLong className="mt-1" />
            </h2>
          </div>
          <p className="text-white opacity-60 text-xs md:text-base leading-[160%]">
            {description}
          </p>
          <div className="flex items-center gap-8">
            <Link
              href={github}
              className="group hover:bg-yellow-200 duration-300 transition-all py-2 md:py-4 px-5 md:px-10 rounded-lg text-black text-base md:text-xl font-semibold bg-white flex gap-4 items-center"
            >
              GitHub Link
              <FaGithubAlt className="text-black text-xl md:text-3xl  duration-300 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
