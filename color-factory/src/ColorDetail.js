import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";

const ColorDetail = ({colors}) => {
    const { color } = useParams();
    if (!colors.includes(color)){
        return <Navigate to="/colors" />
    }
    const bodyStyle = {
        backgroundColor: color,
        height: "100vh",
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      };

    return (
        <div className="ColorDetail" style={bodyStyle}>
            <h1>The color of {color}</h1>
            <br></br>
            <button>
                <Link to="/colors">Back to Color List</Link>
                </button>
        </div>
    )

};

export default ColorDetail;