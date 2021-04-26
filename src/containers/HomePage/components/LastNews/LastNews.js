import React from 'react';
import blogImg1 from "../../assets/blog-bg-1.jpg";
import blogImg2 from "../../assets/blog-bg-2.jpg";
import blogImg3 from "../../assets/blog-bg-3.jpg";

const LastNews = () => {
    return (
        <div className="section LastNews">
            <div className="container">
                <h2 className="section_title">آخر الأخبار لدينا</h2>
                <div className="row mt-4">
                    <div className="col-md-4 col-12">
                        <div className="card">
                            <img className="card-img-top" 
                                 src={blogImg1} 
                                 alt="blogImg1"
                            />
                            <div className="card-body">
                                <h5 className="card-title">28 مايو ، 2017</h5>
                                <p className="card-text">
                                    مصدرك لرصد بيانات سوق بيانات سوق 
                                    البيانات اليوم. المصدر الخاص بك المصدر الخاص بك
                                    هناك حقيقة مثبتة منذ زمن طويل وهي 
                                    أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على 
                                    الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة 
                                    التي يقرأها. ولذلك يتم استخدام
                                </p>
                                <a href="#" 
                                   className="btn btn-warning">
                                    اقرا المزيد من 
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="card">
                            <img className="card-img-top" 
                                 src={blogImg2} 
                                 alt="blogImg2"
                            />
                            <div className="card-body">
                                <h5 className="card-title">28 مايو ، 2017</h5>
                                <p className="card-text">
                                    مصدرك لرصد بيانات سوق بيانات سوق 
                                    البيانات اليوم. المصدر الخاص بك المصدر الخاص بك
                                    هناك حقيقة مثبتة منذ زمن طويل وهي 
                                    أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على 
                                    الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة 
                                    التي يقرأها. ولذلك يتم استخدام
                                </p>
                                <a href="#" className="btn btn-warning">اقرا المزيد من </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="card">
                            <img className="card-img-top" 
                                 src={blogImg3} 
                                 alt="blogIm3"
                            />
                            <div className="card-body">
                                <h5 className="card-title">28 مايو ، 2017</h5>
                                <p className="card-text">
                                    مصدرك لرصد بيانات سوق بيانات سوق 
                                    البيانات اليوم. المصدر الخاص بك المصدر الخاص بك
                                    هناك حقيقة مثبتة منذ زمن طويل وهي 
                                    أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على 
                                    الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة 
                                    التي يقرأها. ولذلك يتم استخدام
                                </p>
                                <a href="#" className="btn btn-warning">اقرا المزيد من </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default LastNews;