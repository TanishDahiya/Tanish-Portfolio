import React from 'react'
import "./Project.css"


function Project() {
    return (
      <>
   <h1 className="project-header">Some In Depth <span className="projectspan">Case Study </span>Of My Successful Project</h1>
          <div class="container contwid">
      <div class="card">
        <div class="cards-header">
          <img src="https://static.latribune.fr/1233270/netflix-mosaique-series-tele-tv.png" alt="" />
        </div>
        <div class="card-body">
        
          <h4>Netflix Clone</h4>
          <p>
         This application was built using React ( Hooks, Context), Firebase &
Styled Components.
I have built pages within this application: sign in, sign up, browse &
lastly the homepage.
For storage database I use Firebase.
          </p>
          <div className="Netflixbutton">
            <a href="https://netflix-49fb7.web.app/">
    <button>VISIT</button>
     </a>
          </div>
        
        </div>
      </div>
      <div class="card">
        <div class="cards-header">
          <img src="https://i.pcmag.com/imagery/lineups/00Of2v2Xj4f51EK8oowHJMZ-1.1569492778.fit_lim.size_1182x667.jpg" alt="" />
        </div>
        <div class="card-body">
         
          <h4>
          Facebook Clone
          </h4>
          <p>
This application was built using React and functional Components is used in this application.
Firebase is used for storing the database for old and new posts.
Material Ui is used for the icons. Google Authentication is used with the help of firebase. 
          </p>
              <div className="Facebookbutton">
                 <a href=" https://fb-clone-beta.vercel.app/">
    <button>VISIT</button>
    </a>
          </div>
        
        </div>
      </div>
      <div class="card">
        <div class="cards-header">
          <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/1800x1200_virus_3d_render_red_03_other.jpg" alt="" />
        </div>
        <div class="card-body">
        
          <h4>Coronavirus Tracker</h4>
          <p>
               This application was built using React, Functional
Components, Firebase, Material UI.
Real time data API is used in this web application, which is of
disease.sh website.
I have built first InfoBoxes then Tables, Line Graphs and Maps.
          </p>
                <div className="Covidbutton">
                    <a href="     https://covid-19-b5e22.firebaseapp.com/">
    <button>VISIT</button>
    </a>
          </div>
         
        </div>
      </div>
    </div>
    
    </>

    
    )
}

export default Project
