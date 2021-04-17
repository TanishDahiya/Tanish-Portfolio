import React from 'react'
import "./Shortportfolio.css"
import Shortportfolioimage from "./images/taxi-822.png"
import { Link } from 'react-router-dom'
import NEW from "./images/Boy/writer.jpg"

function Shortportfolio() {
    return (
        <div className="shortportfolio">
            {/*<div class="containerr">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="about-content">
                            <div class="section-title four">
                                <h2> See <span>My Story</span>. It's a long story to become a Web and Software Developer and continue</h2>
                                <p>I am currently pursuing my BTech in Electronics and Communication from the University Institute of Engineering and Technology(UIET), Maharshi Dayanand University, Rohtak(Haryana).</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="left">
                                        <ul>
                                            <li><span>Age:</span> 21 Years</li>
                                            <li><span>Residence:</span> Sonipat(Hr.)</li>
                                           
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="right">
                                        <ul>
                                            <li><span>Phone:</span> +91 8930370447</li>
                                            <li><span>Email:</span> tanishdahiya25@gmail.com</li>
                                           
                                        </ul>
                                    </div>
                                </div>
                                <Link to="/portfolio">
                                <button className="shortportfoliobutton">Portfolio</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-image">
                            <img src={Shortportfolioimage} alt=""/>
                        </div>
                    </div>
                </div>
    </div>*/}

    <div class="portfoliomaxwidth">
        <div class="portfoliodisplay">

            <div class="portfoliowidthtext">
                <div class="portfolioheader">
                <h2>See <span class="portfoliospan">My Story.</span> It's a long story to become a Web and Software Developer and continue</h2>
                <p>I am currently pursuing my BTech in Electronics and Communication from the University Institute of Engineering and Technology(UIET), Maharshi Dayanand University, Rohtak(Haryana).</p>
                </div>
                <div class="portfoliolist">


                         <div class="left">
                                        <ul>
                                            <li><span>Age:</span> 21 Years</li>
                                            <li><span>Residence:</span> Sonipat(Hr.)</li>
                                           
                                        </ul>
                                    </div>
                         
                                
                                    <div class="right">
                                        <ul>
                                            <li><span>Phone:</span> +91 8930370447</li>
                                            <li><span>Email:</span> tanishdahiya25@gmail.com</li>
                                           
                                        </ul>
                                    </div>

                </div>
                 <Link to="/portfolio">
                                <button className="shortportfoliobutton">Portfolio</button>
                                </Link>
            </div>

            <div class="portfoliowidthimage">
                <img src={NEW} alt=""/>
            </div>

        </div>
        
    </div>
            
</div>
    )
}

export default Shortportfolio
