import React from 'react';
import "./Jumbotron.css";

const Jumbotron = (props) => {
    return ( 
        <div className="jumbotron py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="col-md-6 col-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href={props.from1Url}
                                       className="text-primary">
                                        {props.from1}
                                    </a>
                                </li>
                                {
                                    props.from2 && (
                                        <li className="breadcrumb-item">
                                            <a href={props.from2Url}
                                               className="text-primary">
                                                {props.from2}
                                            </a>
                                        </li>
                                    )
                                }
                                <li className="breadcrumb-item active" 
                                    aria-current="page">
                                    {props.title}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div> 
        </div> 
    )
}

export default Jumbotron;