import React from 'react';
import chooseImg1 from "./assets/choose-us-img-1.jpg";
import chooseImg2 from "./assets/choose-us-img-2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "./ContentArea.css";

const ContentArea = () => {
    return (
        <div className="section ContentArea">
            <div className="container">
                <h2 className="section_title">
                    هو تشواس الفوضى
                </h2>
                <div className="row mt-5">
                    <div className="col-lg-3 col-md-6 col-12">
                        <img src={chooseImg1} 
                             alt="chooseImg1"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <h3>
                            الموثوقية
                        </h3>
                        <p>
                            أبجد هوز الجزر، والحسومات معززة، لكنها تفعل الوقت وحيوية.
                            معززة، لكنها تفعل الوقت وحيوية.
                        </p>
                        <h3 className="mt-4">
                            توفير الوقت
                        </h3>
                        <p>
                            أبجد هوز الجزر، والحسومات معززة، لكنها تفعل الوقت وحيوية.
                            معززة، لكنها تفعل الوقت وحيوية.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <img src={chooseImg2} 
                             alt=""
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <h3>
                            الموثوقية
                        </h3>
                        <p>
                            أبجد هوز الجزر، والحسومات معززة، لكنها تفعل الوقت وحيوية.
                            معززة، لكنها تفعل الوقت وحيوية.
                        </p>
                        <h3 className="mt-4">
                            توفير الوقت
                        </h3>
                        <p>
                            أبجد هوز الجزر، والحسومات معززة، لكنها تفعل الوقت وحيوية.
                            معززة، لكنها تفعل الوقت وحيوية.
                        </p>
                    </div> 
                </div>
                <div className="row mt-5">
                    <div className="ContentArea_item col-lg-4 col-12">
                        <div className="single_icon">
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <h3>التجديدات</h3>
                        <p>
                            تتوفر مجالات خبرتنا المتنوعة على أساس استشاري كدعم إضافي
                        </p>
                    </div>
                    <div className="ContentArea_item col-lg-4 col-12">
                        <div className="single_icon">
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <h3>المنشآت</h3>
                        <p>
                            تتوفر مجالات خبرتنا المتنوعة على أساس استشاري كدعم إضافي
                        </p>
                    </div>
                    <div className="ContentArea_item col-lg-4 col-12">
                        <div className="single_icon">
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <h3>إعادة بناء نواة</h3>
                        <p>
                            تتوفر مجالات خبرتنا المتنوعة على أساس استشاري كدعم إضافي
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentArea;