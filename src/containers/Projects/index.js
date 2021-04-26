import React, {useState, useEffect} from 'react';
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import {useSelector, useDispatch} from "react-redux"; 
import { setProjects} from "../../redux/actions/productActions";
import projectImg1 from "./assets/single-project-bg-1.jpg";
import projectImg2 from "./assets/single-project-bg-2.jpg";
import projectImg3 from "./assets/single-project-bg-3.jpg";
import projectImg4 from "./assets/single-project-bg-4.jpg";
import projectImg5 from "./assets/single-project-bg-5.jpg";
import projectImg6 from "./assets/single-project-bg-6.jpg";
import "./Projects.css";

const Projects = () => {
    const [projectsData, setProjectsData] = useState([
        {
            name: "تركيب الجسر",
            type: "التركيب",
            image: projectImg1,
        },
        {
            name: "إعادة بناء تشييد المباني",
            type: "‘اعادة التشكيل",
            image: projectImg2,
        },
        {
            name: "تصميم البيت",
            type: "التصميم",
            image: projectImg3,
        },
        {
            name: "منزل المهندس المعماري",
            type: "مهندس معماري",
            image: projectImg4,
        },
        {
            name: "تنفيذ البناء",
            type: "التنفيذ",
            image: projectImg5,
        },
        {
            name: "فندق البناء",
            type: "تعيين",
            image: projectImg6,
        },
        
        {
            name: "منزل المهندس المعماري",
            type: "مهندس معماري",
            image: projectImg4,
        },
        {
            name: "تنفيذ البناء",
            type: "التنفيذ",
            image: projectImg5,
        },
        {
            name: "فندق البناء",
            type: "تعيين",
            image: projectImg6,
        },
    ]);

    const projects = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProjects = async () => {
        // const response = await axios.get("https://fakestoreapi.com/products")
        //     .catch((err)=> {
        //         console.log("err",err);
        //     }); 
        // dispatch(setBlogs(response));
        dispatch(setProjects(projectsData));
    };
    useEffect(() => { 
        fetchProjects();
    }, []);
    console.log("projects: ", projects);

    return (
        <div>
            <Jumbotron 
                title="مشاريع"
                from1="الصفحة الرئيسية"
                from1Url="/home-page"  
            />
            <div className="container">
                <div className="row">
                    {
                        projectsData.map((project, index) =>
                            <div className="col-lg-4 col-md-6">
                                <a className="single_project"
                                   href={`/projects/single-project/${index+1}`}>
                                    <div className="single_project_img">
                                        <img src={project.image} 
                                            alt="project image"
                                        />
                                    </div>
                                    <div className="single_project_info">
                                        <h4>{project.name}</h4>
                                        <p>{project.type}</p>
                                    </div>
                                </a>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects
