import React, {Fragment} from 'react';
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import ProjectTop from "../Components/ProjectTop";
import WaterSports from "../Components/WaterSports";
import WaterImg from "../Components/WaterImg";
import WinterSports from "../Components/WinterSports";
import WinterImg from "../Components/WinterImg";
import Forest from "../Components/Forest";
import ForestImg from "../Components/ForestImg";

function Projects() {
    return (
        <Fragment>
            <NavBar/>
            <ProjectTop/>
            <WaterSports/>
            <WaterImg/>
            <WinterSports/>
            <WinterImg/>
            <Forest/>
            <ForestImg/>
            <Footer/>
        </Fragment>
    );
}

export default Projects;