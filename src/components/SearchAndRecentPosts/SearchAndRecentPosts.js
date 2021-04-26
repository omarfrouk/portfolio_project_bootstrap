import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
faSearch,
faAngleRight
} from '@fortawesome/free-solid-svg-icons'; 

const SearchAndRecentPosts = (props) => {
    const [recentPostsData, setRecentPostsData] = useState([
        {
            title: "عنوان المدونة يذهب إلى هنا",
            date: "24 مايو ، 2017",
            link: "#"
        },
        {
            title: "عنوان المدونة يذهب إلى هنا",
            date: "24 مايو ، 2017",
            link: "#"
        },
        {
            title: "عنوان المدونة يذهب إلى هنا",
            date: "24 مايو ، 2017",
            link: "#"
        },
        {
            title: "عنوان المدونة يذهب إلى هنا",
            date: "24 مايو ، 2017",
            link: "#"
        },
        {
            title: "عنوان المدونة يذهب إلى هنا",
            date: "24 مايو ، 2017",
            link: "#"
        },
    ]);
    const [categories, setCategories] = useState([
        {
            title: "بناء المعنى",
            link: "#"
        },
        {
            title: "المعماري",
            link: "#"
        },
        {
            title: "التجديدات",
            link: "#"
        },
        {
            title: "بناء إعماري",
            link: "#"
        },
        {
            title: "هندسة",
            link: "#"
        },
    ]);
    const [words, setWords] = useState([
        "المنشآت",
        "سباكة",
        "التجديدات",
        "اعمال بناء",
        "قبل البناء",  
        "المنشآت",
        "سباكة",
        "التجديدات",
        "اعمال بناء",
        "قبل البناء", 

    ]);

    return ( 
        <div className="col-lg-3 col-12">
            <div className="search">
                <div className="input-group mb-3"> 
                    <input type="text" 
                           className="form-control" 
                           placeholder="ابحث" 
                           aria-label="Username" 
                           aria-describedby="basic-addon1" 
                    />
                    <div className="input-group-prepend">
                        <span className="input-group-text" 
                              id="basic-addon1">
                            <FontAwesomeIcon icon={faSearch}/>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="border mb-0 p-3">
                    المشاركات الاخيرة
                </h3>
                <ul className="list-unstyled border">
                    {
                        recentPostsData.map((data) =>
                            <a href={data.link}>
                                <li className="p-3"> 
                                    <span className="d-block text-dark">
                                        <FontAwesomeIcon icon={faAngleRight}
                                                         className="ml-1"
                                        />
                                        {data.title}
                                    </span>
                                    <span className="d-block text-info">
                                        {data.date}
                                    </span>
                                </li>
                            </a>
                        )
                    }
                </ul>
            </div>
            <div>
                <h3 className="border mb-0 mt-5 p-3">
                    فئات
                </h3>
                <ul className="list-unstyled border">
                    {
                        categories.map((category) =>
                            <a href={category.link}>
                                <li className="p-2"> 
                                    <span className="d-block text-dark">
                                        <FontAwesomeIcon icon={faAngleRight}
                                                         className="ml-1"
                                        />
                                        {category.title}
                                    </span>
                                </li>
                            </a>
                        )
                    }
                </ul>
            </div>
            <div className="my-4">
                <h3 className="border mb-0 p-3">
                    الكلمات
                </h3>
                <ul className="list-unstyled p-2 border">
                    {
                        words.map((word) =>
                            <li className="d-inline-block bg-light p-1 m-1">
                                {word}
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default SearchAndRecentPosts;