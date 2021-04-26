import React from 'react'
import "./Home.css";

const Home = () => {
    return (
        <div className="section home">
            <div className="container">
                <div className="home-item">
                    <h2 className="my-4">قوية الانصهار قالب البناء الحد الأدنى</h2>
                    <p>
                        نسعى لتحقيق أحلام عملائنا ، من خلال الجمع بين أفكارهم
                            وأسلوب حياتهم وميزانيتهم وتجربتنا الخاصة.
                    </p>
                    <button className="btn btn-warning">
                        اطلب اقتباس
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Home;