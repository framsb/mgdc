import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import image from "../../img/sofa-image.png";
import "../../styles/login.css";
import { Modal_login} from "../component/modal_login";
import { Modal_register } from "../component/modal_register";



export const Register = () => {

	const ChangeOption = (e) => {	
		if (e.target.value === "1"){
		const log = document.getElementById('log-frame').style.display= ""
		const initial = document.getElementById('init').innerHTML = log
			
		}
		if (e.target.value === "2"){
			const log = document.getElementById('log-frame2').style.display= ""
			const initial = document.getElementById('init').innerHTML = log
			
			}
	}

	return (
		<div className="container-register">
		<svg viewBox="380 0 100 200" className="background2" xmlns="http://www.w3.org/2000/svg" >
			<path fill="#ffffff" d="M 0 0 H 490 Q 383 98 455 202 C 565 305 394 417 457 503 T 454 505 H 0 Z" />
		</svg>
		
		<div className="container-login">
			<div className="graph-login">
				
				<div className="card-login" >
					<div id="log-frame" style={{display:"none"}}>
						<Modal_login />	
					</div>
					<div id="log-frame2" style={{display:"none"}}>
						<Modal_register />	
					</div>
					<div id="init">
						<h1 className="text-login">Bienvenido a tu sitio de compra</h1>
						<div classnName="d-flex">
						<button type="button" className="btn btn-log" value="1" onClick={(e) => ChangeOption(e)} >
							Ya tengo cuenta!
						</button>
						<button type="button" className="btn btn-log mx-2" value="2" onClick={(e) => ChangeOption(e)} >
							Registrate
						</button>	</div>
					</div>
				</div>
				<div className="image-login">
					<img src={image} alt=""/>
				</div>
				
			</div>
		</div>
		</div>
	);
};
