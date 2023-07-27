import React, {Fragment} from 'react';
import NavBar from "../Components/NavBar";
import ContactTop from "../Components/ContactTop";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

function Contact(props) {
    return (
        <Fragment>
            <NavBar/>
            <ContactTop/>
            <ContactForm/>
            <Footer/>
        </Fragment>
    );
}

export default Contact;