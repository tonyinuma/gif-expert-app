import React from "react";

export const GifGridItem = (image) => {
    return (
        <div className="card animate__animated animate__bounceIn">
            <img src={image.url} alt={image.title}></img>
            <p>{image.title}</p>
        </div>
    );
};
