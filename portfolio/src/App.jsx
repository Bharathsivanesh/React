import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile";
import Project from "./pages/projects";
import About from "./pages/about";
import Weblayout from "./layouts/weblayout";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Weblayout />}>
            <Route path="/" element={<Profile />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
