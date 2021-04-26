import React from 'react'
import projectImg from "../../assets/project-slide1.jpg";
import "./about.css";

const about = () => {
    return (
        <div className="section about">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-12">
                        <div className="about_item">
                            <h2 className="section_title">دون والغبار</h2>
                            <p>
                                ونحن نسعى لتحقيق أحلام عملائنا، من خلال الجمع بين أفكارهم،
                                 ونمط الحياة، والميزانية مع تجربتنا الخاصة،
                                 والخبرة، وأفضل الممارسات لإنشاء
                                 البيت الذي هو ممتع، عملي ومستدامة وذات قيمة دائمة.

                            </p>
                            <button className="btn btn-warning">
                                عرض جميع المشاريع
                            </button>
                        </div> 
                    </div>
                    <div className="col-md-7 col-12">
                            <div className="about_img">
                                <img className="w-100"
                                     src={projectImg} 
                                     alt="projectImg"/>
                            </div>
                        </div>
                </div>

            </div>
            
        </div>
    )
}

export default about;