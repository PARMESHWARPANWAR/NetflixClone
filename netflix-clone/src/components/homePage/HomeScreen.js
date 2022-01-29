import React from 'react';
import Banner from '../header/Banner';
import Nav from '../header/Nav';
import "./HomeScreen.css";

function HomeScreen() {
  return <div className="homeScreen">
        <Nav/>

        <Banner/>

        {/* Row */}
  </div>;
}

export default HomeScreen;
