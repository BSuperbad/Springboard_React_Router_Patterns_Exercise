import React from "react";
import {v4 as uuid} from "uuid";
import { Link } from "react-router-dom";


const ColorList = ({colors}) => {
console.log(colors)
    return (
        <div className="ColorList">
                  <h1>Welcome to the Color Factory</h1>
            <h4>Select a color below:</h4>
       
            <ul>
            {colors.map((c)=>(
                <li style={{ listStyleType: 'none'}} key={uuid()}>
                    <Link to={`/colors/${c}`}>
                    {c}
                    </Link>
                </li>

            ))}
            </ul>
            <div>
                <button>
                    <Link to="/colors/new">Add a Color</Link>
                </button>
            </div>
            </div>
    )

};

export default ColorList;