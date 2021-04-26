import React from 'react'
import serviceImg1 from "../../assets/service-item-bg-1.jpg";
import serviceImg2 from "../../assets/service-item-bg-2.jpg";
import newsImg1 from "../../assets/news-thumb-1.jpg";
import newsImg2 from "../../assets/news-thumb-2.jpg";
import newsImg3 from "../../assets/news-thumb-3.jpg";
import "./News.css";

const News = () => {
    return (
        <div className="section news">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <div className="card">
                            <img className="card-img-top" 
                                 src={serviceImg1} 
                                 alt="serviceImg1"/>
                            <div className="card-body">
                                <h5 className="card-title">أفضل البناء في العالم</h5>
                                <p className="card-text">
                                    أبجد هوز دولور الجلوس امات، والحيوية، بحيث تعبا وحزنا
                                    ، وبعض الأشياء الهامة التي يجب. على مدى السنوات
                                    القادمة، الذين يمارسون أبجد هوز دولور الجلوس
                                    امات، والحيوية، بحيث تعبا وحزنا، وبعض الأشياء
                                    الهامة التي يجب. على مدى السنوات القادمة، الذين يمارسون
                                </p>
                                <a href="#" className="btn btn-warning">عرض التفاصيل</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="card">
                            <img className="card-img-top" 
                                 src={serviceImg2} 
                                 alt="serviceImg1"/>
                            <div className="card-body">
                                <h5 className="card-title">أفضل تجديد في العالم</h5>
                                <p className="card-text">
                                    أبجد هوز دولور الجلوس امات، والحيوية، بحيث تعبا وحزنا
                                    ، وبعض الأشياء الهامة التي يجب. على مدى السنوات
                                    القادمة، الذين يمارسون أبجد هوز دولور الجلوس
                                    امات، والحيوية، بحيث تعبا وحزنا، وبعض الأشياء
                                    الهامة التي يجب. على مدى السنوات القادمة، الذين يمارسون
                                </p>
                                <a href="#" 
                                   className="btn btn-warning">
                                    عرض التفاصيل
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <h2 className="section_title mb-4">الاخبار المهمة</h2>
                        <div className="news-left border-bottom mb-4">
                            <img src={newsImg1} 
                                 alt=""/>
                            <p>
                                البناء التطبيقات مساعدة المشرفين على البناء سحب السلامة أولا
                            </p>
                        </div>
                        <div className="news-left border-bottom mb-4">
                            <img src={newsImg2} 
                                 alt=""/>
                            <p>
                                البناء التطبيقات مساعدة المشرفين على البناء سحب السلامة أولا
                            </p>
                        </div>
                        <div className="news-left border-bottom mb-4">
                            <img src={newsImg3} 
                                 alt=""/>
                            <p>
                                البناء التطبيقات مساعدة المشرفين على البناء سحب السلامة أولا
                            </p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;