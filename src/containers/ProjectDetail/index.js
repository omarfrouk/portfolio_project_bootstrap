import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import { 
    selectedProject, 
    removeSelectedProject,
} from "../../redux/actions/productActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'; 

import Jumbotron from "../../components/Jumbotron/Jumbotron";
import projectImg1 from "./assets/completed-project.jpg";
import projectImg2 from "./assets/project-thumb-1.jpg";
import projectImg3 from "./assets/project-thumb-2.jpg";
import projectImg4 from "./assets/project-thumb-3.jpg";
import "./ProjectDetail.css";

const ProjectDetail = () => {
    const [projectData, setProjectData] = useState([
        {
            name: "تركيب الجسر",
            type: "التركيب",
            image1: projectImg1,
            image2: projectImg2,
            image3: projectImg3,
            image4: projectImg4,
            client: "جون دو",
            area: "980،000",
            ENG: "ديفيد وارنر",
            brief: `أبجد هوز، أبجد هوز
                أبجد هوز، أبجد هوز`,
            description: `
                هناك حقيقة مثبتة منذ زمن طويل وهي أن 
                المحتوى المقروء لصفحة ما سيلهي
                القارئ عن التركيز على الشكل الخارجي للنص 
                أو شكل توضع الفقرات في الصفحة التي يقرأها.
                ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ
                -إلى حد ما- للأحرف عوضاً عن استخدام "هنا .
                هناك حقيقة مثبتة منذ زمن طويل وهي أن 
                المحتوى المقروء لصفحة ما سيلهي
                القارئ عن التركيز على الشكل الخارجي للنص 
                أو شكل توضع الفقرات في الصفحة التي يقرأها.
                ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ
                -إلى حد ما- للأحرف عوضاً عن استخدام "هنا .
                هناك حقيقة مثبتة منذ زمن طويل وهي أن 
                المحتوى المقروء لصفحة ما سيلهي
                القارئ عن التركيز على الشكل الخارجي للنص 
                أو شكل توضع الفقرات في الصفحة التي يقرأها.
                ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ
                -إلى حد ما- للأحرف عوضاً عن استخدام "هنا .
                هناك حقيقة مثبتة منذ زمن طويل وهي أن 
                المحتوى المقروء لصفحة ما سيلهي
                القارئ عن التركيز على الشكل الخارجي للنص 
                أو شكل توضع الفقرات في الصفحة التي يقرأها.
                ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ
                -إلى حد ما- للأحرف عوضاً عن استخدام "هنا .
            `,
        }
    ]);

    const [ourProjects, setOurProjects] = useState([
        {
            name: "أعمال بناء",
            link: "#",
        },
        {
            name: "أعمال بناء",
            link: "#",
        },
        {
            name: "أعمال بناء",
            link: "#",
        },
        {
            name: "أعمال بناء",
            link: "#",
        },
        {
            name: "أعمال بناء",
            link: "#",
        },
    ]);

    const project = useSelector(state => state.project);
    const {projectId} = useParams();
    const dispatch = useDispatch();
    console.log("projectSSS", project);
    
    const fetchProjectDetail = async() => {
        // const response = await axios.get(`https://fakestoreapi.com/products/${projectId}`)
        // .catch((err) => {
        //     console.log("err", err)
        // });
        // dispatch(selectedProject(response));
        dispatch(selectedProject(projectData));
    }
    useEffect(() => {
        if(projectId && projectId !=="")
        fetchProjectDetail();
        return () => {
            dispatch(removeSelectedProject());
        }; 
    }, [projectId])

    return (
        <div>
             {
                project[0] && ( 
                    <div>
                        <Jumbotron 
                            title="مشاريع"
                            from1="الصفحة الرئيسية"
                            from1Url="/home-page" 
                            from2="مشاريع"
                            from2Url="/projects" 
                        />
                        <div className="section blog">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="big-image">
                                                    <a className="gallery-item" 
                                                       href="">
                                                        <img src={project[0].image1} 
                                                             alt="Image" 
                                                             className="img-responsive"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <a className="gallery-item" 
                                                   href="">
                                                    <img src={project[0].image2}  
                                                         alt="Image" 
                                                         className="img-responsive"
                                                    />
                                                </a>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <a className="gallery-item" 
                                                   href="">
                                                    <img src={project[0].image3} 
                                                         alt="Image" 
                                                         className="img-responsive"
                                                    />
                                                </a>
                                            </div>
                                            <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-0">
                                                <a className="gallery-item" 
                                                   href="">
                                                    <img src={project[0].image4} 
                                                         alt="Image" 
                                                         className="img-responsive"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <h3>عنوان المشروع يذهب إلى هنا</h3>
                                        <p>{project[0].description}</p>
                                    </div>
                                    <div className="col-lg-4">
                                        <div>
                                            <div className="border mb-0 p-3">
                                                <h4>تفاصيل المشاريع</h4>
                                                <p>العميل: {project[0].client}</p>
                                            </div>
                                            <ul className="list-unstyled border">
                                                <li className="p-3"> 
                                                    <span className="d-block text-dark">
                                                        المساحة بالمتر المربع: {project[0].area}م 2
                                                    </span>
                                                </li>
                                                <li className="p-3"> 
                                                    <span className="d-block text-dark">
                                                        المهندس المعماري: {project[0].ENG}
                                                    </span>
                                                </li>
                                                <li className="p-3"> 
                                                    <p className="d-block text-dark">
                                                        {project[0].brief}
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <div className="border mt-4 mb-0 p-3">
                                                <h4>مشاريعنا</h4>
                                            </div>
                                            <ul className="list-unstyled border">
                                                {
                                                    ourProjects.map(ourProject =>
                                                        <a href={ourProject.link}>
                                                            <li className="p-3"> 
                                                                <span className="d-block text-dark">
                                                                    <FontAwesomeIcon icon={faAngleRight}
                                                                                     className="ml-1"
                                                                    />
                                                                    {ourProject.name}
                                                                </span> 
                                                            </li>
                                                        </a>
                                                    )
                                                }
                                                
                                            </ul>
                                        </div>
                                        <div className="quote-title-area">
                                            <h5>الحصول على الاقتباس على الأمة ريفو</h5>
                                            وسيقوم خبراء لدينا الرد عليك مع اقتباس قريبا جدا
                                        </div>
                                        <div class="quote-form-area">
                                            <form action="index.html">
                                                <div>
                                                    <label for="name">الاسم</label>
                                                    <input type="text" 
                                                           placeholder="اكتب اسمك" 
                                                    />
                                                </div>
                                                <pdiv>
                                                    <label for="email">
                                                        البريد الإلكتروني
                                                    </label>
                                                    <input type="email" 
                                                           placeholder="اكتب بريدك الالكتروني"
                                                    />
                                                </pdiv>
                                                <div>
                                                    <label for="phone">
                                                        رقم الهاتف
                                                    </label>
                                                    <input type="text" 
                                                           placeholder="اكتب هاتفك"
                                                    />
                                                </div>
                                                <div>
                                                    <label for="message">
                                                        Message
                                                    </label>
                                                    <textarea type="text" 
                                                              placeholder="اكتب رسالتك هنا"> 
                                                    </textarea>
                                                </div>
                                                <div>
                                                    <input className="bg-warning"
                                                           type="submit" 
                                                           value="الحصول على أسعار مجاني"
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                )}
        </div>
    )
}

export default ProjectDetail;
