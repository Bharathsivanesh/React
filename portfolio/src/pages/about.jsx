import { useState } from "react";

const About = () => {
  const [visible, setvisible] = useState(false);
  return (
    <>
      <div className="flex justify-end p-5 items-end">
        <button
          onClick={() => {
            setvisible(true);
          }}
          className="py-2 px-2 rounded bg-green-700 text-1xl font-serif font-bold text-white"
        >
          LOGIN
        </button>
        {/* <h1>{visible} </h1> */}
      </div>

      <>
        {visible && (
          <div className="flex justify-center items-center min-h-screen">
            <form className="w-2/5 h-96 p-10 flex flex-col justify-center items-center bg-violet-500 rounded-lg shadow-lg space-y-4">
              <h1 className="text-white text-4xl font-bold text-center mb-2 uppercase">
                Login
              </h1>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full p-2 text-orange-500 border border-gray-300 rounded focus:outline-none focus:ring-4  focus:ring-orange-500"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full p-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <button className="w-full bg-green-800 text-white py-2 rounded hover:bg-orange-600 transition duration-300">
                Submit
              </button>
              <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition duration-300">
                Cancel
              </button>
            </form>
          </div>
        )}
      </>
    </>
  );
};
export default About;
