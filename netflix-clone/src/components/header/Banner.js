import React from 'react';

function Banner() {


  function truncate(string,n){
    return string?.length>n ? string.substr(0,n-1)+'...': string;
  }
  return <header className="banner"
    style={{backgroundSze:"cover", backgroundImage:`url("https://wallpapercave.com/wp/wp7123665.jpg")`,
    backgroundPosition:"center center",
}}  
  >
      <div className="banner_contents">
          <h1 className="banner_title">Movie Name</h1>
          <div className="banner_buttons">
              <button className="banner_button">Play</button>
              <button className="banner_button">My List</button>
          </div>
          <h1 className="banner_description">
            {truncate(`This is a test description
          This is a test description This is a test description This is a test description
          This is a test description This is a test description This is a test description
          This is a test description This is a test description This is a test description
          This is a test description This is a test description This is a test description
          This is a test description This is a test description This is a test description
          This is a test description This is a test description This is a test description`,150)}</h1>
      </div>
      <div className="banner_fadeBotton"/>
  </header>;
}

export default Banner;
