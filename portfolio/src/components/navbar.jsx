import { CircleUser, CircleX } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [visible, setvisible] = useState(false);
  return (
    <>
      <div className="flex w-full justify-between items-center bg-[#2F3A44] text-white h-14 px-4 shadow-lg">
        <div className="flex w-1/5 justify-center">
          <h2 className="font-serif font-bold text-3xl">Bharath</h2>
        </div>
        <div className="flex w-[70%] items-center justify-end space-x-20  mx-10 font-serif font-bold">
          <Link to="/">PROFILE</Link>
          <Link to="/project">PROJECT</Link>
          <Link to="/about">ABOUT</Link>
          <CircleUser
            onClick={() => {
              setvisible(true);
            }}
          />
        </div>
      </div>

      {visible && (
        <div className=" h-screen w-screen absolute left-0 top-0 bg-black/20   flex justify-center items-center min-h-screen">
          <form className="w-2/5 h-96 p-10 flex flex-col justify-center items-center bg-violet-500 rounded-lg shadow-lg space-y-4">
            <div className="flex justify-end   w-full ">
              <CircleX
                className=" w-34 size-10 text-red-600 outline-none outline-double bold-icon"
                onClick={() => {
                  setvisible(false);
                }}
              />
            </div>

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
            <button className="w-full bg-green-800 text-white py-2 rounded ">
              Submit
            </button>
            <button
              onClick={() => {
                setvisible(false);
              }}
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition duration-300"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Navbar;
