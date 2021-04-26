import React, {useState, useEffect} from 'react';
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import galleryImg1 from "./assets/gallery-image-1.jpg";
import galleryImg2 from "./assets/gallery-image-2.jpg";
import galleryImg3 from "./assets/gallery-image-3.jpg";
import galleryImg4 from "./assets/gallery-image-4.jpg";
import galleryImg5 from "./assets/gallery-image-5.jpg";
import galleryImg6 from "./assets/gallery-image-6.jpg";
import galleryImg7 from "./assets/gallery-image-7.jpg";
import galleryImg8 from "./assets/gallery-image-8.jpg";
import galleryImg9 from "./assets/gallery-image-9.jpg";
import "./Gallery.css";

const Gallery = () => {
    const [images, setImages] = useState([
        {
            image: galleryImg1,
            category: "category-a",
        },
        {
            image: galleryImg2,
            category: "category-b category-d",
        },
        {
            image: galleryImg3,
            category: "category-c category-b",
        },
        {
            image: galleryImg4,
            category: "category-d category-a",
        },
        {
            image: galleryImg5,
            category: "category-b category-c",
        },
        {
            image: galleryImg6,
            category: "category-b category-d",
        },
        {
            image: galleryImg7,
            category: "category-b category-c",
        },
        {
            image: galleryImg8,
            category: "category-b category-d",
        },
        {
            image: galleryImg9,
            category: "category-b category-a",
        },
    ]);
    const [filterImages, setFilterImages] = useState([]);
    const handleClick = (e) => {
        let filterImagesTemp = [];
        if (e.target.dataset.filter === "mix") {
            filterImagesTemp = images;
        } 
        else {
            filterImagesTemp = images.filter( image =>
                image.category.includes(e.target.dataset.filter)
            );
        }
        setFilterImages(filterImagesTemp);
        console.log(e.target.dataset.filter);
    };
    const activeItem = () => {
        // Add active class to the current button (highlight it) 
        var btns = document.getElementById("shorting-menu").getElementsByClassName("shorting-menu-button");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("shorting-menu-active");
                current[0].className = current[0].className.replace(" shorting-menu-active", "");
                this.className += " shorting-menu-active";
            });
        }
    }
    
    useEffect(() => {
        setFilterImages(images);
        activeItem();
    }, [images]);

    return (
        <div>
            <Jumbotron 
                title="صالة عرض"
                from1="الصفحة الرئيسية"
                from1Url="/home-page"  
            />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shorting-menu"
                             id="shorting-menu">
                            <button className="shorting-menu-button shorting-menu-active"
                                    type="button" 
                                    data-filter="mix" 
                                    onClick={handleClick.bind()}>
                                الكل    
                            </button> |
                            <button className="shorting-menu-button"
                                    type="button" 
                                    data-filter="category-a" 
                                    onClick={handleClick.bind()}>
                                بناء إعماري
                            </button> |
                            <button className="shorting-menu-button"
                                    type="button" 
                                    data-filter="category-b"
                                    onClick={handleClick.bind()}>
                                هندسة
                            </button> |
                            <button className="shorting-menu-button"
                                    type="button" 
                                    data-filter="category-c"
                                    onClick={handleClick.bind()}>
                                عزيمة أو نية
                            </button> |
                            <button className="shorting-menu-button"
                                    type="button" 
                                    data-filter="category-d"
                                    onClick={handleClick.bind()}>
                                هندسة معمارية
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row shorting">
                    {
                        filterImages.map(image =>
                            <div className='col-lg-4 col-md-6'>
                                <div className="single-portfolio-item">
                                    <a className="gallery-item" 
                                       href={image.image}
                                       target="_blank">
                                        <img src={image.image} 
                                             alt="image item" 
                                        /> 
                                    </a>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Gallery;