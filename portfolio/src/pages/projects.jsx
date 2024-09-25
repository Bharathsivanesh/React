import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";
import project3 from "../assets/img/project3.png";
import Skills from "./skills";  
const projects = () => {
  const project = [
    {
      img: project1,
      description: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id
          doloribus quasi a sequi cumque corporis aliquam numquam quas quae,
          autem rerum. Cum sed repellat assumenda atque voluptates voluptatibus
          eligendi.
        </p>
      ),
      btn: "Github",
      aos: "fade-up-right",
    },
    {
      img: project2,
      description: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id
          doloribus quasi a sequi cumque corporis aliquam numquam quas quae,
          autem rerum. Cum sed repellat assumenda atque voluptates voluptatibus
          eligendi.
        </p>
      ),
      btn: "Github",
      aos: "fade-down",
    },
    {
      img: project3,
      description: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id
          doloribus quasi a sequi cumque corporis aliquam numquam quas quae,
          autem rerum. Cum sed repellat assumenda atque voluptates voluptatibus
          eligendi.
        </p>
      ),
      btn: "Github",
      aos: "fade-up-left",
    },
  ];
  return (
    <>
      <div className="bg-[#374151] mt-28">
        <h1
          className="text-white w-[100%] font-serif font-bold text-5xl text-center"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          Projects <span className="text-cyan-300">Experience</span>
        </h1>
        <div className="flex flex-wrap justify-evenly  items-center mt-14 gap-10">
          {project.map((data, index) => (
            <div
              key={index}
              data-aos={data.aos}
              data-aos-duration="2000"
              className="bg-[#374151] w-96 h-96 ml-5 p-5 flex flex-col gap-5 text-white  border-4 border-cyan-300 hover:scale-x-110 transition-transform duration-500 hover:shadow-cyan-500/50 hover:shadow-2xl"
            >
              <img src={data.img} alt="" className="h-36 w-full" />
              <p>{data.description}</p>
              <button className="bg-cyan-300 text-center w-24 py-2 rounded-md  mx-32">
                {data.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <Skills />
    </>
  );
};

export default projects;
