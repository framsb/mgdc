import React, { Component } from "react";
import gdc from "../../img/logo_gdc.png"

export const Footer = () => (<>
	<footer className="footer mt-auto py-3 text-center">
		<div className="container">
			<div className="logo">
			<img className="gdc_footer" src={gdc}/>
			<ul className="some">
				<li>
					<a href="https://www.facebook.com/galeriadecasa/"><i className="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
				</li>
				<li>
					<a href="https://twitter.com/galeriadecasa"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>
				</li>
				<li>
					<a href="https://www.instagram.com/mueblesgaleriadecasa"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a>
				</li>
			</ul>
		</div>
		<div className="sec contact">
        <h2>Contact Info</h2>
        <ul className="info">
          <li>
            <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
            <span>El Cafetal - C.C. Plaza Las Americas II, Nivel C-1</span>
          </li>
		  <li>
            <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
            <span>La Yaguara - C.C. Da Vinci, Nivel PB</span>
          </li>
          <li>
            <span><i className="fa fa-phone" aria-hidden="true"></i></span>
            <p><a href="tel:04241398363">+58 4241398363</a></p>
          </li>
          <li>
            <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
            <p><a href="malito:tiago86g@gmail.com">mueblegaleriade_casa@gmail.com</a></p>
          </li>
        </ul>
      </div>
	  </div>
	</footer>
	<div className="copyrightText">
	<p className="text-center">
	© 2022 Framberling Barrios
	</p>
	</div>
	</>
);
