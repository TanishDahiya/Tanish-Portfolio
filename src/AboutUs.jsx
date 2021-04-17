import React from "react"
import "./About.css"
import $ from "jquery";
import jQuery from 'jquery'
import Footer from "./Footer"
import somethingnew from "./images/Boy/hero_person.webp"


class AboutUs extends React.Component {
	componentDidMount() {
        (function($) {

	$(document).ready(function() {
		setupFade();
		setupClickToScroll();
		setupPostAnimation();
		setupScrollToTop();
     enableScrollAbortion();

		// Trigger window.scroll, this will initiate some of the scripts
		$(window).scroll();
  });
  
  
  // Allow user to cancel scroll animation by manually scrolling
  function enableScrollAbortion() {
    var $viewport = $('html, body');
    $viewport.on('scroll mousedown DOMMouseScroll mousewheel keyup', function(e) {
        if ( e.which > 0 || e.type === 'mousedown' || e.type === 'mousewheel') {
             $viewport.stop();
        }
    });
  }

	function setupScrollToTop() {
		var scrollSpeed = 750;
		$('.trigger-scroll-to-top').click(function(e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, scrollSpeed);
		});
	}


	function setupPostAnimation() {
		var posts = $('.post-wrapper .post');
		$(window).on('scroll resize', function() {

			var currScroll = $(window).scrollTop() > $(document).scrollTop() ? $(window).scrollTop() : $(document).scrollTop(),
				windowHeight = $(window).height(), // Needs to be here because window can resize
				overScroll = Math.ceil(windowHeight*.20),
				treshhold = (currScroll + windowHeight) - overScroll;

			posts.each(function() {

				var post = $(this),
					postScroll = post.offset().top

				if(postScroll > treshhold) {
					post.addClass('hidden');
				} else {
					post.removeClass('hidden');
				}

			});

		});
	}

	function setupFade() {

		var posts = $('.post-wrapper .post').reverse(),
			stemWrapper = $('.stem-wrapper'),
			halfScreen = $(window).height() / 2;

		$(window).on('scroll resize', function() {

			delay(function() {

				var currScroll = $(window).scrollTop() > $(document).scrollTop() ? $(window).scrollTop() : $(document).scrollTop(),
					scrollSplit = currScroll + halfScreen;

				posts.removeClass('active').each(function() {

					var post = $(this),
						postOffset = post.offset().top;

					if(scrollSplit > postOffset) {

						// Add active class to fade in
						post.addClass('active')

						// Get post color
						var color = post.data('stem-color') ? post.data('stem-color') : null,
							allColors = 'color-green color-yellow color-white'

						stemWrapper.removeClass(allColors);

						if(color !== null) {
							stemWrapper.addClass('color-' + color);
						}

						return false;
					}

				});
			}, 20);

		});

	}


	function setupClickToScroll(post) {

		var scrollSpeed = 750;

		$('.post-wrapper .post .stem-overlay .icon').click(function(e) {
			e.preventDefault();

			var icon = $(this),
				post = icon.closest('.post'),
				postTopOffset = post.offset().top,
				postHeight = post.height(),
				halfScreen = $(window).height() / 2,
				scrollTo = postTopOffset - halfScreen + (postHeight/2);

			$('html, body').animate({
				scrollTop: scrollTo
			}, scrollSpeed);
		});

	}

})(jQuery);




/*==========  Helpers  ==========*/


// Timeout function
var delay = (function(){
	var timer = 0;
	return function(callback, ms){
		clearTimeout (timer);
		timer = setTimeout(callback, ms);
	};
})();

$.fn.reverse = function() {
    return this.pushStack(this.get().reverse(), arguments);
};
	
	}
	render() {
		return (
            <>
<div class="stem-wrapper">
	<div class="stem"></div>
	<div class="stem-background"></div>
</div>
<div className="fixheader">
<header class="section header">
	<div class="section-inner">
		
		<div class="master-head">
			<h1 class="page-title">See<span> My Story</span>. It's a long story to become a Web and Software Developer and continue</h1>
			<p class="page-description"><span>Ready to go for a ride?</span></p>
		{/*	<p class="scroll-button" onClick="$('.post-wrapper .post:first-child .stem-overlay .icon').click();">Ready to go for a ride?</p>*/}
		</div>
			
	</div> 
</header> 
</div>

<div class="section main-content">
	<div class="section-inner">
	
		<div class="stem-padding"></div>
		
		<div class="post-wrapper">
			
			<article class="post bitbucket-icon">
				<div class="stem-overlay">
					<div class="icon"></div>
					<div class="stem-mask"></div>
				</div>
				
				<div class="post-content">
				{/*	<p class="meta"><span>Education</span></p>*/}
					<h2 class="post-title">EDUCATION</h2>
					<div class="entry-content">
				
						<h4>B.Tech</h4>
						<p>I am currently pursuing my BTech in Electronics and Communication from the University Institute of Engineering and Technology(UIET), Maharshi Dayanand University, Rohtak(Haryana).</p>
                       <p> Graduation Year: 2017-2021</p>
					   <h4>Higher Education</h4>
					   <p>I completed my Higher education from Hindu Sr. Sec. School, Sonipat, Haryana</p>
					   </div>
				
			
				</div>
			</article>
		
			<article class="post m-icon" data-stem-color="green">
				<div class="stem-overlay">
					<div class="icon"></div>
					<div class="stem-mask"></div>
				</div>
				
				<div class="post-content">
				{/*	<p class="meta">Written yesterday at 8:56 pm</p>*/}
					<h2 class="post-title">Experience</h2>
					<div class="entry-content">
						<h4>React Intern</h4>
						<p>Currently I am doing React Internship at Sandhan Learning .I Developed a Front end website (Sandhan Learning).The technology I
have used is React, Sass, Material UI, Firebase.</p>
<h4>Web Developer Intern</h4>
						<p>I have completed my first internship at Sthava Systems Privated Limited. I have worked on the home, Sign up and Sign-in page of the company
secondary website. Technologies I have used: React and Bootstrap.</p>
					</div>
				</div>
			</article>
		
			<article class="post music-icon" data-stem-color="yellow">
				<div class="stem-overlay">
					<div class="icon"></div>
					<div class="stem-mask"></div>
				</div>
				
				<div class="post-content">
					{/*<p class="meta">Written yesterday at 8:56 pm</p>*/}
					<h2 class="post-title">Training</h2>
					<div class="entry-content">
						<h4>Programming in C++</h4>
						<p>I have completed my training in C++ and DS and Algo from the Coding Ninjas. I Certified by CN for an excellent performer of this batch</p>
						<h4>Web Developemnt</h4>
							<p>I have completed my web developement training from free code camp and W3 School. Skills: HTML, CSS, Bootstrap, Material UI, Jquery, REACT, SASS/SCSS.</p>
					</div>
				</div>
			</article>
		
			<article class="post twitter-icon" data-stem-color="white">
				<div class="stem-overlay">
					<div class="icon"></div>
					<div class="stem-mask"></div>
				</div>
				
				<div class="post-content">
					{/*<p class="meta">Written yesterday at 8:56 p</p>*/}
					<h2 class="post-title">OTHER</h2>
					              <a href="https://dev.to/tanishdahiya">
  <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="TanishDahiya's DEV Profile" height="50" width="50"/>
</a>
						<p>Earned DEV batch for contributing in open source.</p>
						<h4>Useful Links</h4>
							<p><a href="https://netflix-49fb7.web.app/">Netflix Clone</a></p>
                        <p><a href="https://covid-19-b5e22.firebaseapp.com/">Covid 19 Tracker</a></p>
                       <p> <a href="https://air-bnb-clone-f0a02.web.app/">Air Bnb Clone</a></p>
                       <p> <a href="https://fb-clone-beta.vercel.app/">Facebook Clone</a></p>
                        
					<div class="entry-content">
					
					</div>
				</div>
			</article>
		
		
		</div> 
	
		<div class="single-stem-icon scroll-to-top trigger-scroll-to-top"></div>
			
        </div>
        </div> 
	<div className="aboutfooter">
<footer class="footer section">
	<div class="section-inner">
		
		<div class="good-bye">
			<p>That's all, buddy!</p>
       <p>Ride Finished</p>
		
	</div> 
</div>
</footer>
<div><Footer/></div>

</div>
</>

        

		);
	}
}

export default AboutUs
