import React, { useState } from "react";

export const GifExpertApp = () => {
    // const categories = ["One Punch", "Dragon Ball", "Samurai X"];
    const [categories, setCategories] = useState(["One Punch", "Dragon Ball", "Samurai X"]);

    const handleAdd = () => {
        setCategories([...categories, 'Doraemon'])
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {categories.map((category) => {
                    return <li key={category}>{category}</li>;
                })}
            </ol>
        </>
    );
};
