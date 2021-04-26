import React from 'react';
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
    return (
        <div className="ContactUs">
           <Jumbotron 
                title="اتصل بنا"
                from1="الصفحة الرئيسية"
                from1Url="/home-page" 
            />
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="jumbotron p-5">
                            <address>
                                <strong>عنواننا هو</strong>
                                <br/>
                                البناء المحدودة
                                <br/>
                                210-2750 شارع كوادرا فيكتوريا ،
                                <br/>
                                يوم كندا
                            </address>
                            <address>
                                <strong>اتصل بنا الآن</strong>
                                <br/>
                                هاتف الهاتف: +324-5442-415
                                <br/>
                                فاكس الفاكس: +324-5442-415
                            </address>
                            <address >
                                <strong>البريد الإلكتروني</strong>
                                <br/>
                                <a href="#" 
                                   className="text-primary">
                                    دعم @ البناء. كوم
                                </a>
                                <br/>
                                <a href="#"
                                   className="text-primary">
                                    معلومات @ البناء. كوم
                                </a>
                                <br/>
                                <a href="#"
                                   className="text-primary">
                                    الادارية @ البناء. كوم
                                </a>
                            </address>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="jumbotron p-4">
                            <h3 className="mb-4">املأ النموذج أدناه وسنعاود الاتصال:</h3>
                            <form id="contatc_form">
                                <div className="row">
                                    <div className="col-lg-6 mb-4">
                                        <input type="text" 
                                            id="contact_name"
                                            name="name" 
                                            placeholder="اسمه:"
                                            required="" 
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <input type="email" 
                                            name="email" 
                                            id="contact_email" 
                                            placeholder="البريد الإلكتروني:" 
                                            required="" 
                                            className="w-100"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 mb-4">
                                        <input type="text" 
                                            name="sub" 
                                            id="contact_subject" 
                                            placeholder="اسم الشركة:" 
                                            required="" 
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <input type="text" 
                                            name="phone" 
                                            id="contact_phone" 
                                            placeholder="رقم الهاتف:" 
                                            required="" 
                                            restrict="A-Z\a-z\0-9" 
                                            className="w-100"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mb-4">
                                        <textarea name="message" 
                                                id="contact_message" 
                                                cols="30" rows="4" 
                                                placeholder="رسالة:" 
                                                required=""
                                                className="w-100"
                                                >
                                        </textarea>
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <div id="contact_send_status"></div>
                                        <input className="btn bg-warning ml-4" 
                                            type="submit" 
                                            value="ارسل لنا" 
                                        />
                                        <span>أو اتصل بنا برقم الجزء على:</span>
                                        <span>
                                            <FontAwesomeIcon icon={faPhone} 
                                                            className="text-warning"
                                            />
                                            +324-5442-415
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;