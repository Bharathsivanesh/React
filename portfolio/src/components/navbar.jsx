import { CircleUser } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="flex w-full justify-between items-center bg-cyan-400 text-white h-14 px-4">
        <div className="flex w-1/5 justify-center">
          <h2 className="font-serif font-bold text-3xl">Bharath</h2>
        </div>
        <div className="flex w-[70%] items-center justify-end space-x-20  mx-10 font-serif font-bold">
          <Link to="/">PROFILE</Link>
          <Link to="/project">PROJECT</Link>
          <Link to="/about">ABOUT</Link>
          <CircleUser />
        </div>
      </div>
    </>
  );
};

export default Navbar;
