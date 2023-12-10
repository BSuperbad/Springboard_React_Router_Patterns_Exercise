import React from "react";
import {v4 as uuid} from "uuid";
import { Link } from "react-router-dom";

const Nav = ({dogs})=> {
    return (
        <nav className="Nav">
            <Link to="/dogs">Dog List</Link>
            ·
            {dogs.map((dog)=> (
                <Link to={`/dogs/${dog.name}`} key={uuid()}>
                    {dog.name} ·
                </Link>
            ))}
        </nav>
    )
};

export default Nav;