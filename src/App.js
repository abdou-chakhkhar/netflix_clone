import React from "react";
import "./App.css";
import Row from "./components/Row/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      {/* nav */}
      {/* banner */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TopRated" fetchUrl={requests.fetchTopRated} />
      <Row title="ActionMovie" fetchUrl={requests.fetchActionMovie} />
      <Row title="ComedyMovie" fetchUrl={requests.fetchComedyMovie} />
      <Row title="HorrorMovie" fetchUrl={requests.fetchHorrorMovie} />
      <Row title="RomanceMovie" fetchUrl={requests.fetchRomanceMovie} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
