import React from 'react'
import "./ShortIntro.css"
import random from "./images/taxi-page-not-found.png"

function ShortIntro() {
    return (
        <div className="shortintro">
            <div class="shortintro_image four">
                <div className="shortshort">
                <div class="banner-img">
                    <img src={random} alt="" />
               
                </div>
                   <div class="text">
                       <h4><span>Hey it's</span></h4>
                       <h1>Tanish Dahiya</h1>
                       <p>I am software developer and web designer focused on crafting and user-friendly experiences. I am passionate about building excellent software that improves the lives of those around me.</p>
                       {/*	<button type="button" className="btn btn-outline-dark">More About Me</button>*/}
                   </div>
                   </div>
            
           </div>
        </div>
    )
}

export default ShortIntro
