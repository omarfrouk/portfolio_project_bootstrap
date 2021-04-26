import React from 'react';
import "./Subscribe.css";

const Subscribe = () => {
    return (
        <div className="subscribe">
            <div className="subscribe_item">
                <h2>اشترك في نشرتنا الإخبارية</h2>
                <p className="my-4">
                    الاشتراك في النشرة الإخبارية الاشتراك ويكون أول
                        من يعرف عن أحدث أخبار الشركة والعروض
                        الخاصة والخصومات. والعروض الخاصة والخصومات.
                </p>
                <div className="form">
                    <input className="form-control"
                           type="text" 
                           placeholder="اشترك معنا"
                    />
                    <button className="btn btn-warning">اشترك الان</button>
                </div>
            </div>
            
        </div>
    )
}

export default Subscribe;