import React from 'react'
import footerLogo from "./assets/footerLogo.png";
import footerImg1 from "./assets/footer-thumb-img-1.jpg";
import footerImg2 from "./assets/footer-thumb-img-2.jpg";
import footerImg3 from "./assets/footer-thumb-img-3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
faCoffee,
faAngleRight
} from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="section footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="footer_item">
                            <h3>
                                <img src={footerLogo} 
                                     alt="footerLogo"
                                />
                            </h3>
                            <p>
                                نحن مستعدون لمساعدتك دائما.
                            </p>
                            <p>
                                210-2750 شارع كوادرا فيكتوريا ، كندا.
                            </p>
                            <p className="text-secondary">هاتف الهاتف: + 324-5442-415</p>
                            <p className="text-secondary">فاكس الفاكس: + 324-5442-415</p>
                            <p className="text-secondary">البريد الإلكتروني: دعم @ البناء. كوم</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <h4>روابط سريعة</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#" 
                                   className="text-warning">
                                    <FontAwesomeIcon icon={faAngleRight} 
                                                     className="ml-2"
                                    />
                                    الصفحة الرئيسية
                                    
                                </a>
                            </li>
                            <li>
                                <a href="#" 
                                   className="text-warning">
                                    <FontAwesomeIcon icon={faAngleRight} 
                                                     className="ml-2"
                                        />
                                    معلومات عنا
                                </a>
                            </li>
                            <li>
                                <a href="#" 
                                   className="text-warning">
                                    <FontAwesomeIcon icon={faAngleRight} 
                                                     className="ml-2"
                                    />
                                    خدمات
                                </a>
                            </li>
                            <li>
                                <a href="#" 
                                   className="text-warning"> 
                                    <FontAwesomeIcon icon={faAngleRight} 
                                                     className="ml-2"
                                    />
                                    صالة عرض
                                </a>
                            </li>
                            <li>
                                <a href="#" 
                                   className="text-warning">
                                    <FontAwesomeIcon icon={faAngleRight} 
                                                     className="ml-2"
                                    />
                                    مدونة
                                </a>
                            </li>
                            <li>
                                <a href="#" 
                                   className="text-warning">
                                    <FontAwesomeIcon icon={faAngleRight} 
                                                     className="ml-2"
                                    />
                                    مشاريع
                                </a>
                            </li>
                            <li>
                                <a href="#" 
                                   className="text-warning">
                                    <FontAwesomeIcon icon={faAngleRight} 
                                                     className="ml-2"
                                    />    
                                     اتصل بنا
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <h4>المشاركات الاخيرة</h4>
                        <a href="#">
                            <div className="footer-left border-bottom mb-2">
                                <img src={footerImg1} 
                                     alt=""/>
                                <p className="text-warning">شركة بناء</p>
                                <p>10 يونيو 2020</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="footer-left border-bottom mb-2">
                                <img src={footerImg2} 
                                     alt=""/>
                                <p className="text-warning">شركة بناء</p>
                                <p>10 يونيو 2020</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="footer-left border-bottom mb-2">
                                <img src={footerImg3} 
                                     alt=""/>
                                <p className="text-warning">شركة بناء</p>
                                <p>10 يونيو 2020</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <h4>اتصل بنا</h4>
                        <p>
                            اشترك في النشرة الإخبارية
                             لدينا للحصول على أخبار مهمة
                             ، عروض مذهلة وداخل المجارف:
                        </p>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control subscribe_input" 
                                   placeholder="ادخل ايميلك" 
                                   aria-label="" 
                                   aria-describedby="basic-addon1" 
                            />
                            <div className="input-group-append">
                                <button className="btn btn-warning rounded-pill subscribe_button" 
                                        type="button">
                                    إشترك الان
                                </button>
                            </div>
                        </div>
                        <div className="social_icons">
                            <a href="#">
                                <FontAwesomeIcon icon={faCoffee} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faCoffee} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faCoffee} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faCoffee} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faCoffee} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faCoffee} />
                            </a>
                        </div>            
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 col-12">
                        <a href="#">
                            <p>نسخ؛ 2019 جميع الحقوق محفوظة</p>
                        </a>
                    </div>
                    <div className="footer_policies col-md-6 col-12">
                        <a href="#">
                            <p>الشروط والاحكام</p>
                        </a>
                        <p className="mx-2">|</p>
                        <a href="#">
                            <p>سياسة خاصة</p>
                        </a>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Footer;