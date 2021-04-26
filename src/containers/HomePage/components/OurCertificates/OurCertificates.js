import React from 'react';
import profileImg1 from "../../assets/profile-img-1.jpg";
import profileImg2 from "../../assets/profile-img-2.jpg";
import profileImg3 from "../../assets/profile-img-3.jpg";

import "./OurCertificates.css";

const OurCertificates = () => {
    return (
        <div className="section OurCertificates">
            <div className="container">
                <h2 className="section_title">شهاداتنا</h2>
                <div className="row mt-5">
                    <div className="col-lg-4 col-12"> 
                        <img src={profileImg1}
                             alt="profileImg1"
                        /> 
                        <div className="OurCertificates_card">
                            <p>
                            أبجد هوز دولور الجلوس امات، إيليت، سد القيام في الطويلة
                            وحيوية، لذلك أن الألم من العمل، وأنها فكرة عظيمة
                            ، ولكن، أبجد هوز دولور الجلوس امات، إيليت،
                            سد القيام في الطويلة وحيوية، لذلك أن الألم
                            من العمل، وأنها فكرة عظيمة. ولكن، أبجد هوز 
                            دولور الجلوس امات، إيليت، سد القيام في
                            </p>
                            <h5>الاستير كوك</h5>
                            <p>المدبر للمكيدة</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <img src={profileImg2}
                             alt="profileImg2"
                        />
                        <div className="OurCertificates_card">
                            <p>
                            أبجد هوز دولور الجلوس امات، إيليت، سد القيام في الطويلة
                            وحيوية، لذلك أن الألم من العمل، وأنها فكرة عظيمة
                            ، ولكن، أبجد هوز دولور الجلوس امات، إيليت،
                            سد القيام في الطويلة وحيوية، لذلك أن الألم
                            من العمل، وأنها فكرة عظيمة. ولكن، أبجد هوز 
                            دولور الجلوس امات، إيليت، سد القيام في
                            </p>
                            <h5>ديفيد وارنر</h5>
                            <p>مظهر الأفلام</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <img src={profileImg3}
                             alt="profileImg3"
                        />
                        <div className="OurCertificates_card">
                            <p>
                            أبجد هوز دولور الجلوس امات، إيليت، سد القيام في الطويلة
                            وحيوية، لذلك أن الألم من العمل، وأنها فكرة عظيمة
                            ، ولكن، أبجد هوز دولور الجلوس امات، إيليت،
                            سد القيام في الطويلة وحيوية، لذلك أن الألم
                            من العمل، وأنها فكرة عظيمة. ولكن، أبجد هوز 
                            دولور الجلوس امات، إيليت، سد القيام في
                            </p>
                            <h5>مايكل جونسون</h5>
                            <p>إداري</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default OurCertificates;