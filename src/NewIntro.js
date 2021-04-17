import React from 'react'
import "./NewIntro.css"
import images from "./images/32553090.svg"

function NewIntro() {
    return (
        <div class="newintro">
            <div class="newintrowidth">
                <div class="display">
                    <div class="newintrotext">
                        <span>Hey it's</span>
                        <h1>Tanish Dahiya</h1>
                        <p>I am software developer and web designer focused on crafting and user-friendly experiences. I am passionate about building excellent software that improves the lives of those around me. My latest deal is I'm making as many useful things with the React as humanly possible.</p>
                    </div>
                    <div class="newintroimage">
                        <img src={images} alt=""/>
                    </div>
                </div>
            </div>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,160C672,139,768,117,864,96C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            
        </div>
    )
}

export default NewIntro
