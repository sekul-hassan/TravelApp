import React, {Fragment} from 'react';
import HomeTop from "../Components/HomeTop";
import NavBar from "../Components/NavBar";
import Fuerat from "../Components/Fuerat";
import UpComing from "../Components/UpComing";
import UpComingImg from "../Components/UpComingImg";
import Explore from "../Components/Explore";
import Tours from "../Components/Tours";
import Footer from "../Components/Footer";

function Home(props) {
    return (
        <Fragment>
            <NavBar/>
            <HomeTop/>
            <Fuerat/>
            <UpComing/>
            <UpComingImg/>
            <Explore/>
            <Tours/>
            <Footer/>
        </Fragment>
    );
}

export default Home;