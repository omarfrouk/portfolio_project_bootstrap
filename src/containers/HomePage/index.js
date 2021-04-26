import React from 'react';
import Home from "./components/Home/Home";
import About from "./components/About/about";
import News from "./components/News/News";
import ContentArea from "../../components/ContentArea/ContentArea";
import OurCertificates from "./components/OurCertificates/OurCertificates";
import Subscribe from "./components/Subscribe/Subscribe";
import LastNews from "./components/LastNews/LastNews";

const HomePage = () => {
    return (
        <div>
            <Home />
            <About />
            <News />
            <ContentArea />
            <OurCertificates />
            <Subscribe />
            <LastNews />
        </div>
    )
}

export default HomePage;