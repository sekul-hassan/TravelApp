import './App.css';
import './Assets/CSS/Custom.css';
import './Assets/CSS/Responsive.css';
import './Assets/CSS/About.css';
import './Assets/CSS/Service.css';
import './Assets/CSS/Project.css';
import './Assets/CSS/Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Projects from "./Pages/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
