import React from 'react';

function Banner() {
  return <header className="banner"
    style={{backgroundSze:"cover", backgroundImage:`url("https://torranceca.files.wordpress.com/2019/10/netflix.jpg")`,
    backgroundPosition:"center center",
}}  
  >
      <div className="banner_contents">
          <h1 className="banner_title">Movie Name</h1>
          <div className="banner_buttons">
              <button className="banner_button">Play</button>
              <button className="banner_button">My List</button>
          </div>
          <h1 className="banner_description">This is a test description</h1>
      </div>
      <div className="banner_fadeBotton"/>
  </header>;
}

export default Banner;
