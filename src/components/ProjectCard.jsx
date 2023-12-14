import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectCard = ({ url, github, img, title, text }) => {
  return (
    <article
      className="bg-white rounded-lg shadow-md
    hover:shadow-xl duration-300"
    >
      <img
        src={img}
        className="w-full 
          object-cover rounded-t-lg h-64"
        alt={title}
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 flex gap-x-4">{text}</p>
        <div className="mt-4 flex gap-x-4">
            <a href={url}>
               <TbWorldWww className="h8 w-8 text-salte-500
               hover:text-black duration-300"/> 
            </a>
            <a href={github}>
               <FaGithubSquare className="h8 w-8 text-salte-500
               hover:text-black duration-300"/> 
            </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
