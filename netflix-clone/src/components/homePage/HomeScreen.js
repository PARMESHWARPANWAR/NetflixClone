import React from 'react';
import requests from '../../axios/Requests';
import Banner from '../header/Banner';
import Nav from '../header/Nav';
import Row from '../Row/Row';

import "./HomeScreen.css";

function HomeScreen() {
  return <div className="homeScreen">
        <Nav/>

        <Banner/>

        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/> 
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} /> 
        ​<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} /> 
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        ​<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} /> 
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

  </div>;
}

export default HomeScreen;
