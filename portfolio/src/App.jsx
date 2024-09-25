import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile";
import Project from "./pages/projects";
import Weblayout from "./layouts/weblayout";
import Aboutme from "./pages/aboutme";
import Skills from "./pages/skills";
import Contact_page from "./pages/contact";
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
            <Route path="/contact" element={<Contact_page/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
