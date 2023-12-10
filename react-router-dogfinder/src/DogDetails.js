import React from "react";
import {v4 as uuid} from "uuid";
import { useParams, Navigate, Link } from "react-router-dom";


const DogDetails = ({ dogs }) => {
    const { name } = useParams();
    const dog = dogs.find((dog)=> dog.name === name);
    if(!dog){
        return <Navigate to="/" />;
    }
    const {age, src, facts } = dog;

    return(
    <div className="DogDetails">
        <h2>{name}, Aged {age}</h2>
        <img src={src} alt="" className="Dog-img"></img>
        <ul>
            {facts.map((fact)=> (
                <li style={{ listStyleType: 'none'}} key={uuid()}>{fact}</li>
            ))}

        </ul>
        <button>
        <Link to="/dogs">Back to Dog List</Link>
        </button>

    </div>
)};

export default DogDetails;