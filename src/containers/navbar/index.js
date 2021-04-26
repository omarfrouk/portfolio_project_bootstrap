import React, {useEffect} from "react";
import logo from "./assets/logo.png";
import "./navbar.css";

const Navbar = () => {
    
    // const activeItem = () => {
    //     // Add active class to the current button (highlight it) 
    //     var btns = document.getElementById("navbar-nav").getElementsByClassName("nav-link");
    //     for (var i = 0; i < btns.length; i++) {
    //         btns[i].addEventListener("click", function() {
    //             var current = document.getElementsByClassName("nav-item-active");
    //             current[0].className = current[0].className.replace(" nav-item-active", "");
    //             this.className += " nav-item-active"; 
    //         });
    //     }
    // }
    // useEffect(() => {
    //     activeItem();
    // }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <a className="navbar-brand" 
                href="/home-page">
                    <img src={logo} 
                         alt="logo"/>
                </a>
                <button className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" 
                    id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto" id="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" 
                               href="/home-page">
                                الصفحة الرئيسية 
                                <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" 
                               href="/about-us">
                                معلومات عنا
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" 
                               href="#" 
                               id="navbarDropdown" 
                               role="button" 
                               data-toggle="dropdown" 
                               aria-haspopup="true" 
                               aria-expanded="false">
                                صفحات
                            </a>
                            <div className="dropdown-menu" 
                                 aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/blog/single-post/1">مدونة واحدة</a>
                                <a className="dropdown-item" href="/projects/single-project/1">مشروع واحدة</a> 
                                
                            </div>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" 
                               href="/projects">
                                مشاريع
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" 
                               href="/gallery">
                                صالة عرض
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" 
                               href="/blog">
                                مدونة
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" 
                               href="/contact-us">
                                اتصل بنا
                            </a>
                        </li>
                    </ul> 
                </div>
            </div>
        </nav>
    )
}

export default Navbar;