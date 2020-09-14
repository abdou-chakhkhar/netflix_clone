import React from "react";
import "./HomeComponent.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function HomeComponent() {
  return (
    <div className="home">
      <div className="home__blabla">
        <h1 className="">Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h2>
          Ready to watch? Enter your email to create or restart your membership.
        </h2>
        <input
          type="text"
          placeholder="Just click the button bellow to see the netflix guide ."
        />
        <Link to="/app" className="button">
          GET STARTED />
        </Link>
      </div>
    </div>
  );
}

export default HomeComponent;
