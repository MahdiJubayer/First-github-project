import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2> Page Not Found</h2>
      <p>
        <Link to="/"> Back To HomePage</Link>
      </p>
    </div>
  );
}

export default NotFound;
