import React, {useState} from 'react';
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import ContentArea from "../../components/ContentArea/ContentArea";
import OurTeam from "./components/OurTeam/OurTeam";
import teamImg1 from "./assets/team-one.jpg";
import teamImg2 from "./assets/team-two.jpg";
import teamImg3 from "./assets/team-three.jpg";

const AboutUs = () => {
    const [teamMembers, setTeamMembers] = useState([
        {
            name: "فلان الفلاني",
            position: "مدير المشروع",
            image: teamImg1,
            social: 
                {
                    facebook: "#",
                    linkedIn: "#",
                    googlePlus: "#",
                    twitter: "#",
                }, 
        },
        {
            name: "نيك ليفر",
            position: "مدير المشروع",
            image: teamImg2,
            social: 
                {
                    facebook: "#",
                    linkedIn: "#",
                    googlePlus: "#",
                    twitter: "#",
                }, 
        },
        {
            name: "كور أندرسون",
            position: "مدير المشروع",
            image: teamImg3,
            social: 
                {
                    facebook: "#",
                    linkedIn: "#",
                    googlePlus: "#",
                    twitter: "#",
                }, 
        },
    ]);

    return (
        <div>
            <Jumbotron 
                title="معلومات عنا"
                from1="الصفحة الرئيسية"
                from1Url="/home-page"  
            />
            <div className="container">
                <div className="row"> 
                    <ContentArea />
                </div>
                <h2 className="section_title">التق بفريقنا</h2>
                <div className="row my-5"> 
                    {
                        teamMembers.map(member =>  
                            <OurTeam 
                                name={member.name}
                                position={member.position}
                                image={member.image}
                                social={member.social}
                            /> 
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
