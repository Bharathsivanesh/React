import profile from "../assets/img/aboutme.png";
import Project from "./projects";
const Aboutme = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-[100%] items-start bg-[#374151]">
        <h1
          className="text-white w-[100%] font-serif font-bold text-5xl text-center"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <span className="text-cyan-300">About </span>
          Me !
        </h1>
        <div className="  flex flex-col  justify-center items-center md:gap-0 gap-20 md:justify-evenly md:flex-row   mt-20 w-full">
          <div
            className="flex items-center justify-center"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img
              src={profile}
              alt=""
              className="rounded-full md:h-96 md:w-96 w-72 h-72"
            />
          </div>
          <div
            className="w-[80%]  md:w-2/5 h-full md:h-3/5 flex justify-center items-center flex-col glow rounded-lg"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <h2 className="text-3xl font-serif font-bold p-10 text-cyan-300">
              Developer And Desighner
            </h2>
            <p className=" text-2xl text-white font-serif p-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              cumque suscipit quidem a asperiores odio. Tempora iste qui fugit
              est quisquam autem quaerat beatae quas deleniti. Ab dolor a
              veritatis!
            </p>
            <button className=" bg-cyan-300 py-2 px-4 mb-5 font-serif font-bold text-white mt-5 rounded-lg hover:bg-cyan-400 transform hover:scale-105 transition-transform duration-100">
              Resume
            </button>
          </div>
        </div>
      </div>
      <Project />
    </>
  );
};
export default Aboutme;
