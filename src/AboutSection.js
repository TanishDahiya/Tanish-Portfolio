import React from 'react';

import "./AboutSection.css"
import classes from './BackgroundVideo.module.css';
import "./ShortIntro.css"


const AboutSection = () => {

    return (
        <div className={classes.Container} >
            <div className="video_height">
          {/*  <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
            </video>*/}
          <div className="shortintro">
            <div class="shortintro_image four">
            
           </div>
         </div>
            </div>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <div className="aboutsection">
                  <h1>Welcome to Sirius!</h1>
                   <h3>#Hey Folks</h3>
                   <p className="aboutsection_para">I'm a web designer & front-end developer focused on crafting clean &
                       user-friendly experiences. I am passionate about building excellent
                       software that improves the lives of those around me.
                   </p>
                    <button type="button" className="btn btn-outline-dark">More About Me</button>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
