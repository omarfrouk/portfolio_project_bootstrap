import React, {useState, useEffect} from 'react';
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import BlogBox from "./components/BlogBox/BlogBox";
import Pagination from "./components/Pagination/Pagination";
import SearchAndRecentPosts from "../../components/SearchAndRecentPosts/SearchAndRecentPosts";
import {useSelector, useDispatch} from "react-redux"; 
import { setBlogs} from "../../redux/actions/productActions";
import blogImage1 from"./assets/single-blog-image-bg-1.jpg";
import blogImage2 from"./assets/single-blog-image-bg-2.jpg";
import blogImage3 from"./assets/single-blog-image-bg-3.jpg";
import blogImage4 from"./assets/single-blog-image-bg-4.jpg";
import blogImage5 from"./assets/single-blog-image-bg-5.jpg";

const Blog = () => {
    const [blogData, setBlogData] = useState([
        {
            title: "عنوان المدونة يذهب إلى هنا عنوان المدونة يذهب إلى هنا",
            date: " 24 مايو ، 2017",
            description: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء
                لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص
                أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم
                استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ
                -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد`,
            image: blogImage1,
            link: "/blog/single-post/1"
        },
        {
            title: "عنوان المدونة يذهب إلى هنا عنوان المدونة يذهب إلى هنا",
            date: " 24 مايو ، 2017",
            description: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء
                لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص
                أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم
                استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ
                -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد`,
            image: blogImage2,
            link: "/blog/single-post/2"
        },
        {
            title: "عنوان المدونة يذهب إلى هنا عنوان المدونة يذهب إلى هنا",
            date: " 24 مايو ، 2017",
            description: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء
                لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص
                أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم
                استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ
                -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد`,
            image: blogImage3,
            link: "/blog/single-post/3"
        },
        {
            title: "عنوان المدونة يذهب إلى هنا عنوان المدونة يذهب إلى هنا",
            date: " 24 مايو ، 2017",
            description: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء
                لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص
                أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم
                استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ
                -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد`,
            image: blogImage4,
            link: "/blog/single-post/4"
        },
        {
            title: "عنوان المدونة يذهب إلى هنا عنوان المدونة يذهب إلى هنا",
            date: " 24 مايو ، 2017",
            description: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء
                لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص
                أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم
                استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ
                -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد`,
            image: blogImage5,
            link: "/blog/single-post/5"
        },

    ]);
    const blogs = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchBlogs = async () => {
        // const response = await axios.get("https://fakestoreapi.com/products")
        //     .catch((err)=> {
        //         console.log("err",err);
        //     }); 
        // dispatch(setBlogs(response));
        dispatch(setBlogs(blogData));
    };
    useEffect(() => { 
        fetchBlogs();
    }, []);
    console.log("blogs: ", blogs);

    return (
        <div>
            <Jumbotron 
                title="المدونة"
                from1="الصفحة الرئيسية"
                from1Url="/home-page" 
            />
            <div className="section blog">
                <div className="container">
                    <div className="row">
                        <p className="text-center font-weight-bold mb-4">
                            مرحبًا بك في مدونتنا ابقائك على اطلاع بأحدث معلومات الصناعة.
                        </p>
                        <div className="col-lg-9 col-12">
                            {
                                blogData.map((data, index) => 
                                    <BlogBox
                                        title= {data.title}
                                        date= {data.date}
                                        description= {data.description}
                                        image= {data.image}
                                        link= {data.link}
                                    /> 
                                )
                            }
                        </div>
                        <SearchAndRecentPosts />
                    </div>
                </div>
            </div>
            <Pagination />
        </div>
    )
}

export default Blog;