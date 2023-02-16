import React from "react";

export default function Card(props) {
    return (
        <>

            <div className="card main-card p-1">
                <div className="image-card">
                    <img src={props.imgsrc} className="card-img-top card_img" alt="..." />
                </div>
                <div className="card-body card-info">
                    <span className='card_category'>{props.category}</span>
                    <h5 className="card-title card_title">{props.title}</h5>
                    <a href={props.link} target="blank">
                        <button className="btn btn-danger">Watch Now</button>
                    </a>
                </div>
            </div>
        </>
    )
}
