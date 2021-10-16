import React, { useEffect, useState } from "react";

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const api_key = "FAjJ0iHBqMpW1j0ILAdyLFPoLN1JtqNF";
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=10&q=Rick And Morty`;
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            };
        });
        setImages(gifs);
    };

    return (
        <>
            <h3>{category}</h3>
            {images.map((img) => {
                return <img key={img.url} src={img.url}></img>;
            })}
        </>
    );
};
