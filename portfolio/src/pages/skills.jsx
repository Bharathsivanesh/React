// import { Contact } from "lucide-react";
import Contact_page from "./contact";

const Skills = () => {
  const siva = [
    {
      name: "Html",
      percentage: "100%",
    },
    {
      name: "Css",
      percentage: "72%",
    },
    {
      name: "Mern",
      percentage: "50%",
    },
    {
      name: "Flutter",
      percentage: "65%",
    },
  ];
  const professional = [
    {
      name: "Team Work",
      percentage: "70",
    },
    {
      name: "Leadership",
      percentage: "80",
    },
    {
      name: "Hardwork",
      percentage: "100",
    },
    {
      name: "Communication",
      percentage: "70",
    },
  ];
  return (
    <>
      <h1
        className="text-white w-[100%] font-serif font-bold text-5xl mt-10 text-center "
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        My <span className="text-cyan-300">Skills</span>
        <div className="flex flex-wrap w-[100%] h-screen  p-12 justify-between  ">
          <div
            className="flex flex-col gap-10   flex-wrap md:w-1/2 w-[100%]"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div>
              <h2>Technical</h2>
            </div>
            {siva.map((data, index) => (
              <div className="flex justify-between flex-col" key={index}>
                <div className="flex justify-between flex-row">
                  <h4 className="text-2xl">{data.name}</h4>
                  <h3 className="text-2xl">{data.percentage}</h3>
                </div>
                <div className="w-[100%] h-5 bg-black">
                  <h1
                    className="h-5  bg-cyan-200"
                    style={{ width: data.percentage }}
                  ></h1>
                </div>
              </div>
            ))}
          </div>

          <div
            className=" flex flex-col   md:mt-0  mt-20 w-[100%] md:w-[40%] h-full items-center  "
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <div>
              <h2 className="text-white  font-bold">Professional</h2>
            </div>

            <div className="grid grid-cols-2 gap-10 mt-10 mr-0 md:mr-20">
              {professional.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center ml-0 md:ml-24"
                >
                  <div className="w-32 h-32 rounded-full bg-gray-100 shadow-inner flex items-center justify-center">
                    <div
                      className="w-full h-full rounded-full flex items-center justify-center"
                      style={{
                        background: `conic-gradient(#06b6d4 ${
                          skill.percentage * 3.6
                        }deg, #e5e7eb 0deg)`,
                      }}
                    >
                      <span className="text-2xl font-bold text-white rounded-full h-20 flex items-center w-20 justify-center">
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-4 text-white text-lg font-semibold">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <Contact_page />
        </div>
      </h1>
    </>
  );
};

export default Skills;
