import React from 'react'
import "./Footer.css"
import logo from "./images/NewLogos.png"

function Footer() {
    return (
      <div className="footers">
<footer class="footer-distributed">

			<div class="footer-left">
        <div className="sitelogo">
                  <img src={logo} alt=""/>
        </div>
		 

			

				<p class="footer-company-name">Copyright © 2020 Tanish Dahiya . All rights reserved</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>Haryana</span> Sonipat</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+91 8930370447</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:tanishdahiya25@gmail.com">tanishdahiya25@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the Tanish Dahiya</span>
				  This is  the blog Website. Currently under maintenance
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
      </div>
    );
}

export default Footer
