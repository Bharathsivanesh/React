import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
// import { Suspense } from "react";

const Weblayout = () => {
  return (
    <>
      <Navbar />

      {/* <Suspense> */}
      <Outlet />
      {/* </Suspense> */}
    </>
  );
};
export default Weblayout;
