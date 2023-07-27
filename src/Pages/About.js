import React, {Fragment} from 'react';
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import AboutTop from "../Components/AboutTop";
import Mission from "../Components/Mission";
import Experience from "../Components/Experience";

function About(props) {
    return (
        <Fragment>
            <NavBar/>
            <AboutTop/>
            <Mission/>
            <Experience/>
            <Footer/>
        </Fragment>
    );
}

export default About;