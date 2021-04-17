import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"
import { Link } from "react-router-dom";
import sandhan_logo from "./images/NewLogos.png"



class Navbar extends React.Component {
	constructor() {
		super();
		this.hamburgerReveal = this.hamburgerReveal.bind(this);
	}

	componentDidMount() {
		window.onscroll = function () {
			myFunction();
		};
		var navbar = document.querySelector(".navbar");
		var sticky = navbar.offsetTop;

		function myFunction() {
			if (window.pageYOffset > sticky) {
				navbar.classList.add("stick-me");
			} else {
				navbar.classList.remove("stick-me");
			}
		}
	}

	hamburgerReveal() {
		var hamburger_menu = document.querySelector(".hamburger-menu");
		var hamburger_menu_box = document.querySelector(".hamburger-menu-box");

		hamburger_menu.classList.toggle("open");
		hamburger_menu_box.classList.toggle("show-me");
	}

	render() {
		console.log(this.props.videobg);
		return (
			<>
				<div class='transition-overlay'></div>
				<aside class='hamburger-menu-box'>
					<div class='menu'>
						<ul class='navbar-nav'>
								<Link to="/">
							<li class='nav-item'>
							
								<a href='/' class='nav-link transition'>
									Home
								</a>
								
							</li>
							</Link>
							<Link to="/portfolio">
							<li class='nav-item'>
								<a href='/about' class='nav-link transition'>
									PORTFOLIO
								</a>
							</li>
							</Link>
							{/*
							<li class='nav-item'>
								<a href='/experts' class='nav-link transition'>
									Portfolio
								</a>
							</li>
							*/}
							<Link to="/blog">
							<li class='nav-item'>
								<a href='/' class='nav-link'>
									BLOG
								</a>{/*
								<ul>
									
									<li>
										
										<a
											href='student-courses'
											class='transition'
										>
											STUDENTS
										</a>
									
									</li>
									
									<li>
										<a
											href='/institute-courses'
											class='transition'
										>
											INSTITUTES
										</a>
									</li>
									<li>
										<a
											href='/corporate-courses'
											class='transition'
										>
											CORPORATE
										</a>
									</li>
								</ul>*/}
							</li>	
							</Link>
							{/*
							<li class='nav-item'>
								<a href='/contact' class='nav-link transition'>
									CONTACT US
								</a>
							</li>*/}
							
						</ul>
					</div>
					<div class='inner'>
					
						<h2>THANKYOU FOR VISITING SIRIUS</h2>
						<br></br>
						{/*
						<p>
							No global movement springs from individuals. It
							takes an entire team united behind something big.
							Together we work hard, we laugh a lot, we brainstorm
							non stop, we use hundreds of Post-Its a week, and we
							give the best high-fives in town.
						</p>
						<p>
							It’s an audacious, incredibly rewarding mission that
							our increasingly diverse team is dedicated to
							achieving.
						</p>
						<p>
							Exciting challenges lie ahead—new regions,
							technologies, and businesses. Guided by our core
							values, we’ll meet these challenges creatively and
							with the support of our community. Join us!
						</p>*/}
						<br></br>
						{/*<a href='#' class='ghost-btn'>
							<svg>
								<rect
									width='206'
									height='50'
									x='5'
									y='5'
									rx='25'
									fill='none'
									stroke='#2F2E41'
								></rect>
							</svg>
							<span>Download Resume</span>
						</a>*/}
					</div>
				</aside>
				<header class='header'>
					{this.props.videobg}
					<nav class='navbar'>
						<div class='logo'>
							<Link to="/">
							<a href='/' class='transition'>
								<img
									src={sandhan_logo}
									alt='Image'
									class='logo-light'
								></img>
								<img
									src={sandhan_logo}
									alt='Image'
									class='logo-colored'
								></img>
							</a>
							</Link>
		</div>

						<div
							class='hamburger-menu'
							onClick={this.hamburgerReveal}
						>
							<span></span> <span></span> <span></span>
						</div>
						{/*<a href='#' class='custom-btn'>
							RESUME
					</a>*/}
						<ul class='navbar-nav'>
							<Link to="/">
							<li class='nav-item'>
								<a href='/' class='nav-link transition'>
									HOME
								</a>
							</li>
							</Link>
							<Link to="/portfolio">
							<li class='nav-item'>
								<a href='/about' class='nav-link transition'>
									PORTFOLIO
								</a>
							</li>
							</Link>
							{/*
							<li class='nav-item'>
								<a href='/experts' class='nav-link transition'>
									Portfolio
								</a>
							</li>*/}
							<Link to="/blog">
							<li class='nav-item'>
								<a href='/' class='nav-link'>
									BLOG
								</a>
								{/*
								<ul>
									<li>
										<Link to="/student">

										<a
											/*href='/student-courses'
											class='transition'
										>
											STUDENTS
										</a>
										</Link>
									</li>
									<li>
										<a
											href='/institute-courses'
											class='transition'
										>
											INSTITUTES
										</a>
									</li>
									<li>
										<a
											href='/corporate-courses'
											class='transition'
										>
											CORPORATE
										</a>
									</li>
								</ul> */}
							</li>
							</Link>
							{/*
							<li class='nav-item'>
								<a href='/contact' class='nav-link transition'>
									CONTACT US
								</a>
							</li>*/}
						</ul>
					</nav>
					{this.props.inner}
				</header>
			</>
		);
	}
}

export default Navbar;
