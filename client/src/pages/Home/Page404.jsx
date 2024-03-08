import React from "react";
import "./Page404.css"; // You can include your CSS styles here if needed
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div id="oopss" className="">
      <Navbar />
      <div id="error-text">
        <img
          src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
          alt="404"
        />
        <span>404 PAGE</span>
      </div>
      <div className="error-message">
        <h6 className="error-text">
          . The page you were looking for could not be found
        </h6>
      </div>
      <Link to="/" className="back-link">
        ... Back to Home page
      </Link>
    </div>
  );
};

export default ErrorPage;
