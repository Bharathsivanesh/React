import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile";
import Project from "./pages/projects";
import Weblayout from "./layouts/weblayout";
import Aboutme from "./pages/aboutme";
import Skills from "./pages/skills";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Weblayout />}>
            <Route path="/" element={<Profile />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<Aboutme />} />
            <Route path="/skills" element={<Skills />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
