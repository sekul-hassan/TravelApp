import React, {Fragment} from 'react';
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import ServiceTop from "../Components/ServiceTop";
import Adventure from "../Components/Adventure";

function Service(props) {
    return (
        <Fragment>
            <NavBar/>
            <ServiceTop/>
            <Adventure/>
            <Footer/>
        </Fragment>
    );
}

export default Service;