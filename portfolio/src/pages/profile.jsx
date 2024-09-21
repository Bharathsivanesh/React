import profileImage from "../assets/img/animated.png";
import Aboutme from "./aboutme";
const Profile = () => {
  return (
    <>
      <div className=" flex flex-col justify-evenly md:flex-row  items-center md:h-screen w-full  bg-[#374151] ">
        <div
          className="text-white flex flex-col items-start justify-start p-10  md:h-3/5 md:w-1/2 "
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h2 className="text-start text-4xl font-bold mb-4">
            <p>
              Hi, I<span className="text-cyan-300 text-5xl">’</span>m{" "}
              <span className="text-cyan-300 text-5xl">Bharath</span>!
            </p>
          </h2>
          <p className=" text-lg font-serif p-1">
            I’m a passionate web developer with expertise in the MERN stack,
            focused on building modern, responsive web applications. I love
            crafting sleek user interfaces and tackling backend challenges to
            create impactful solutions.
          </p>

          <section className="flex justify-center items-center space-x-16 mt-10 ml-10">
            <button className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-white font-semibold hover:translate-y-2 transition-all duration-250 hover:from-[#331029] hover:to-[#310413]">
              <svg
                className="w-5"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1.1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
              </svg>
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-cyan-300 group-hover:text-md group-hover:-translate-y-10 duration-500">
                Facebook
              </span>
            </button>

            {/* LinkedIn Button */}
            <button className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#0077B5] text-white font-semibold hover:translate-y-2 transition-all duration-250 hover:from-[#084D6E] hover:to-[#042740]">
              <svg
                className="w-5"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1.1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M100.28 448H7.4V148.9h92.78zm-46.16-344.4C24.26 103.6 0 79.4 0 50.18A50.18 50.18 0 0 1 50.18 0C79.4 0 103.6 24.26 103.6 54.38c0 29.22-24.26 53.42-53.42 53.42zM447.8 448h-92.68V302.4c0-34.7-12.44-58.38-43.44-58.38-23.66 0-37.74 15.92-43.94 31.36-2.26 5.5-2.84 13.14-2.84 20.88V448H172.38V148.9h89V184.6h1.26c11.66-18.58 32.14-37.76 69.82-37.76 48.26 0 84.54 31.5 84.54 99.22V448z"></path>
              </svg>
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-cyan-300 group-hover:text-md group-hover:-translate-y-10 duration-500">
                LinkedIn
              </span>
            </button>

            {/* GitHub Button */}
            <button className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#333] text-white font-semibold hover:translate-y-2 transition-all duration-250 hover:bg-[#111]">
              <svg
                className="w-5"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1.1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M511.6 76C229.9 76 0 307 0 590.1c0 227.5 147.6 420.1 352.4 487.9 25.8 4.6 35.3-11.2 35.3-24.9v-87.4c-143.4 31.2-173.6-70-173.6-70-23.5-59.7-57.6-75.6-57.6-75.6-47.1-32.2 3.5-31.6 3.5-31.6 52 4 79.4 53.5 79.4 53.5 46.2 79.1 121.2 56.3 150.7 43.1 4.7-33.5 18.1-56.3 32.9-69.3-114.4-13-234.6-57.3-234.6-255.3 0-56.3 20.1-102.4 53.3-138.4-5.3-13-23.1-65.6 5.1-136.9 0 0 43.5-13.9 142.6 52.6 41.4-11.5 85.7-17.3 129.8-17.5 44.1.2 88.4 6 129.8 17.5 99.1-66.5 142.6-52.6 142.6-52.6 28.2 71.3 10.4 123.9 5.1 136.9 33.2 36 53.3 82.1 53.3 138.4 0 198.5-120.4 242.3-234.9 254.9 18.6 16 35.2 47.6 35.2 96v142.4c0 13.8 9.5 29.7 35.4 24.6C876.4 1010.1 1024 817.5 1024 590.1 1023.3 307 793.4 76 511.6 76z"></path>
              </svg>
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-cyan-300 group-hover:text-md group-hover:-translate-y-10 duration-500">
                GitHub
              </span>
            </button>
          </section>
        </div>

        <div
          className=" md:flex items-center  flex-col justify-start  md:h-3/5"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <img
            src={profileImage}
            alt="Profile"
            className=" w-72 h-72 md:w-96   md:h-96 "
          />
        </div>
      </div>
      <Aboutme />
    </>
  );
};

export default Profile;
