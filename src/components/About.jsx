import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div className="bg-white py-20 " id="about">
      <div
        className="align-element grid md:grid-cols-2
            items-center gap-16"
      >
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-normal">
            I’m a freelancer junior front-end developer and like to code in my
            spare time. Using HTML, CSS, and JavaScript, I have expertise in
            creating responsive websites. I have also worked with well-known
            frontend framework like React I prefer to try out new
            technologies while I’m not working on projects. I’m skilled in
            frontend framework like React as well as HTML, CSS, and JavaScript.
            I have also worked with APIs and am familiar with version control
            programs like Git. I’m a self-starter who values working in a team
            as well as alone. I also pay close attention to details and aim to
            write legible, clean code. As a front-end developer, I want to
            advance my knowledge and skills and help create cutting-edge,
            user-friendly websites. I’m eager to collaborate with a group of
            driven developers and put my expertise to use in the tech
            sector.Besides i have some knowledge in the backend such as php and
            laravel...
          </p>
        </article>
      </div>
    </div>
  );
};

export default About;
