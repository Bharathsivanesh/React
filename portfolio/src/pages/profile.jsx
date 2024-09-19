import profileImage from "../assets/img/profile.jpg";

const About = () => {
  return (
    <>
      <div className="flex  flex-row justify-between items-center h-screen w-screen bg-[#374151]">
        {/* Left side (Text) */}
        <div className="text-white flex flex-col items-start justify-start p-10  w-full md:w-1/2 h-72 ">
          <h2 className="text-start text-4xl font-bold mb-4">
            Hi, I’m Bharath!
          </h2>
          <p className=" text-lg">
            I’m a passionate web developer with expertise in the MERN stack,
            focused on building modern, responsive web applications. I love
            crafting sleek user interfaces and tackling backend challenges to
            create impactful solutions.
          </p>
        </div>

        <div className="flex items-center justify-center  md:w-1/2  h-96">
          <img
            src={profileImage}
            alt="Profile"
            className=" lg:h-96 lg:w-96 rounded-full object-cover "
          />
        </div>
      </div>
    </>
  );
};

export default About;
