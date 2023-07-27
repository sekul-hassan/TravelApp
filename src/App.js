import './App.css';
import './Assets/CSS/Custom.css';
import './Assets/CSS/About.css';
import './Assets/CSS/Service.css';
import './Assets/CSS/Project.css';
import './Assets/CSS/Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import {Fragment} from "react";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Fragment>
        <Contact/>
    </Fragment>
  );
}

export default App;
