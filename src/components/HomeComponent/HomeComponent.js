import React from "react";
import "./HomeComponent.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function HomeComponent() {
  return (
    <div className="homeComponent text-white text-center">
      <div className="container">
        <div className="home__blabla">
          <h1 className="maintitle">Unlimited movies, TV shows, and more.</h1>
          <h2 className="subtitle">Watch anywhere. Cancel anytime.</h2>
          <h2 className="subtitle">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h2>
          <input disabled type="text" placeholder="Just click the button." />
          <div></div>
          <Link to="/app" className="startedBtn btn btn-danger">
            GET STARTED
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
