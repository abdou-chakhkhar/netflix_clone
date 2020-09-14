import React from "react";
import "./App.css";
import Row from "./components/Row/Row";
import requests from "./requests";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION" fetchUrl={requests.fetchActionMovie} />
      <Row title="COMEDY" fetchUrl={requests.fetchComedyMovie} />
      <Row title="HORROR" fetchUrl={requests.fetchHorrorMovie} />
      <Row title="ROMANCE" fetchUrl={requests.fetchRomanceMovie} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
