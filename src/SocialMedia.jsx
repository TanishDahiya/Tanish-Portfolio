import React from "react"
import "./SocialMedia.css"
import $ from "jquery";

class SocialMedia extends React.component {
   



	




	render() {
    
$('.menu-toggle').click(function() {

    $('.site-nav').toggleClass('site-nav-open', 500);
        

    $(this).toggleClass('open');

  })

        	
		return (
            <>
            <header>
    <div class="container">

        <h1 class="logo">
            <span id="logo-first">JASON</span>
            <span id="logo-last">SUTTON</span>
        </h1>

        <nav class="site-nav">
            <ul>
                <li>
                    <a href="#">
                        <i class="fa fa-home site-nav-icon"></i>Home</a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-info site-nav-icon"></i>About</a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-briefcase site-nav-icon"></i>Portfolio</a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-envelope site-nav-icon"></i>Contact</a>
                </li>
            </ul>
        </nav>

        
        <div class="menu-toggle">
            <div class="hamburger"></div>
        </div>
    </div>
</header>
    
     </>
   

		);
	}

};
export default SocialMedia
