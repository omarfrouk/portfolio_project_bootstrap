import React from 'react';
import "./BlogBox.css";

const BlogBox = (props) => {
    return (
        <div className="jumbotron py-4">
            <div className="blog-desc">
                <h4>{props.title}</h4>
                <span>{props.date}</span>
                <p>{props.description}</p>
                <a className="btn btn-warning mb-2"
                   href={props.link}>
                    اقرأ المزيد 
                </a>
            </div>
            <div className="blog-img">
                <img src={props.image}
                     className="w-100"
                     alt="img" 
                />
            </div>
        </div>
    )
}

export default BlogBox;