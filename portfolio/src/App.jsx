import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile";
import Project from "./pages/projects";
import About from "./pages/about";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
