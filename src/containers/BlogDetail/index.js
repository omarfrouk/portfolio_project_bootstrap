import React, {useState, useEffect} from 'react';
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import SearchAndRecentPosts from "../../components/SearchAndRecentPosts/SearchAndRecentPosts";
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import { 
    selectedBlog, 
    removeSelectedBlog 
} from "../../redux/actions/productActions";
import blogImage1 from"../Blog/assets/single-blog-image-bg-5.jpg";
import profileImg1 from "./assets/profile-img-1.jpg";
import profileImg2 from "./assets/profile-img-2.jpg";
import profileImg3 from "./assets/profile-img-3.jpg";
import "./BlogDetail.css";

const BlogDetail = () => {
    const [mainBlogDetail, setMainBlogDetail] = useState([
        {
            img: blogImage1,
            title: "عنوان المدونة يذهب إلى هنا",
            date: " 24 مايو ، 2017",
            description:
                `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ 
                عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
                في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم
                إيبسوم لأنها تعطي
                توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا .

                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
                في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم
                لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا

                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء
                لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم
                لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا .

                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء
                لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم
                لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا

                هناك حقيقة مثبتة منذ زمن طويل وهي أن 
                المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو
                شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم 
                إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا

                هناك حقيقة مثبتة منذ زمن طويل وهي أن 
                المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو
                شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم
                إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا
            `, 
        }
    ]);
    
    const [comments, setComments] = useState([
        {
            image: profileImg1,
            name: "نيك ليفر",
            time: "منذ 2 ساعات",
            description: `الواجبات المنزلية أو إلى دولور
             مكتب الجلوس امات، والتصوير الرقمي،
                أو مجرد السماح في فيرو ومجموعات الأصول.`,
        },
        {
            image: profileImg2,
            name: "نيك ليفر",
            time: "منذ 2 ساعات",
            description: `الواجبات المنزلية أو إلى دولور
             مكتب الجلوس امات، والتصوير الرقمي،
                أو مجرد السماح في فيرو ومجموعات الأصول.`,
        },
        {
            image: profileImg3,
            name: "نيك ليفر",
            time: "منذ 2 ساعات",
            description: `الواجبات المنزلية أو إلى دولور
             مكتب الجلوس امات، والتصوير الرقمي،
                أو مجرد السماح في فيرو ومجموعات الأصول.`,
        },
    ]);
    const blog = useSelector(state => state.blog);
    const {blogId} = useParams();
    const dispatch = useDispatch();
    console.log("blogSSS", blog);
    
    const fetchBlogDetail = async() => {
        // const response = await axios.get(`https://fakestoreapi.com/products/${blogId}`)
        // .catch((err) => {
        //     console.log("err", err)
        // });
        // dispatch(selectedBlog(response));
        dispatch(selectedBlog(mainBlogDetail));
    }
    useEffect(() => {
        if(blogId && blogId !=="")
            fetchBlogDetail();
        return () => {
            dispatch(removeSelectedBlog());
        }; 
    }, [blogId])

    return (
        <div>
            {
                !blog
                ?
                    <div>...loading</div>
                :
                    <div>
                        <Jumbotron 
                            title="عنوان المدونة يذهب إلى هنا"
                            from1="الصفحة الرئيسية"
                            from1Url="/home-page" 
                            from2="المدونة"
                            from2Url="/blog" 
                        />
                        <div className="section blog">
                            <div className="container">
                                <div className="row">
                                    <p className="text-center font-weight-bold mb-4">
                                        مرحبًا بك في مدونتنا ابقائك على اطلاع بأحدث معلومات الصناعة.
                                    </p>
                                    <div className="col-lg-9 col-12">
                                        {
                                            mainBlogDetail.map((data, index) => 
                                                <div className="border p-3">
                                                    <div className="blogDeatailImg mb-2">
                                                        <img src={data.img} 
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <h2>{data.title}</h2>
                                                    <p>{data.date}</p>
                                                    <p>{data.description}</p>
                                                </div>
                                            )
                                        }
                                        <h3 className="my-4">
                                            {comments.length} تعليقات وهذه الوظائف
                                        </h3>
                                        {
                                            comments.map(comment =>
                                                <div className="comment">
                                                    <div>
                                                        <img src={comment.image}
                                                             alt="profile img"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4>{comment.name}</h4>
                                                        <p className="text-secondary">
                                                            {comment.time}
                                                        </p>
                                                        <p>{comment.description}</p> 
                                                        <h4>رد</h4>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        <div>
                                            <h3 className="my-4">اترك تعليقا</h3>
                                            <div className="input-group">
                                                <div className="col-lg-6">
                                                    <input type="text" 
                                                            className="form-control mb-4 " 
                                                            placeholder="اسمك هو*" 
                                                            aria-label="Username" 
                                                            aria-describedby="basic-addon1" 
                                                    />
                                                </div>
                                                <div className="col-lg-6 mb-4">
                                                    <input type="text" 
                                                           className="form-control" 
                                                           placeholder="بريدك الالكتروني *" 
                                                           aria-label="Username" 
                                                           aria-describedby="basic-addon1" 
                                                    /> 
                                                </div>
                                                <div className="col-12 mb-4">
                                                    <textarea className="form-control" 
                                                              aria-label="With textarea"
                                                              rows="4" 
                                                              placeholder="راسلني" > 
                                                    </textarea> 
                                                </div>
                                                <div className="col-12">
                                                    <a className="btn btn-warning w-100 mb-4"
                                                       onClick={() => {}}>
                                                        أرسل تعليق
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <SearchAndRecentPosts />
                                </div>
                            </div>
                        </div>
                    </div>
            }   
        </div>
    )
}

export default BlogDetail;