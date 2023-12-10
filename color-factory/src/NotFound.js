import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>The color you're looking for doesn't exist... yet</h1>
      <Link to="/colors">Back to Color List</Link>
    </div>
  );
}

export default NotFound;