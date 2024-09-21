import project1 from "../assets/img/profile.jpg";
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
    },
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
    },
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
    },
  ];
  return (
    <>
      <div className="mt-32 ">
        <h1 className="text-white w-[100%] font-serif font-bold text-5xl text-center">
          Projects <span className="text-cyan-300">Experience</span>
        </h1>
        <div className="flex flex-wrap justify-evenly  items-center mt-14 gap-10">
          {project.map((data, index) => (
            <div
              key={index}
              className="bg-[#374151] w-96 h-full ml-5 p-5 flex flex-col gap-5 text-white  border-4 border-cyan-300 hover:scale-x-110 transition-transform duration-500 hover:shadow-cyan-500/50 hover:shadow-2xl"
            >
              <img src={data.img} alt="" className="h-56 w-full" />
              <p>{data.description}</p>
              <button className="bg-cyan-300 text-center w-24 py-2 rounded-md mx-32">
                {data.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default projects;
