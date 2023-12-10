import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ColorForm = ({addColor, setColorsA}) => {
    const INITIAL_STATE = {color: ""}
    const [formData, setFormData] = useState(INITIAL_STATE);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }


    const handleSubmit = e => {
        e.preventDefault();
        addColor(formData.color);
        console.log(formData.color);
        setColorsA((currentColors) => [formData.color, ...currentColors]);
        navigate('/colors');
    };

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="color">Color Name</label>
        <input 
        type="text" 
        name="color"
        value={formData.color}
        onChange={handleChange}
        />
        <button>Add Color</button>
        </form>
    )

};

export default ColorForm;