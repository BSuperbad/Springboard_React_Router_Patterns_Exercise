import React from "react";
import {v4 as uuid} from "uuid";
import { Link } from "react-router-dom";
import "./DogList.css"

const DogList = ({dogs}) => {
    return (
        <div className="DogList">
            {dogs.map((dog)=> (
                <div key={uuid()}>
                    <Link to={`/dogs/${dog.name}`}>
                    <img className="DogList-img" src={dog.src} alt={dog.name}/>
                    <h4>{dog.name}, age {dog.age}</h4>
                    </Link>
                </div>

            ))}
        </div>
    )
};

export default DogList;