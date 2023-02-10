import React, { useState, useContext }from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import gdc from "../../img/gdc_logo_e.png"

import { toast } from 'react-toastify';

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    const history = useHistory();

    const bye = () => {
		toast('👋 Vuelve pronto', {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			});
	}
  
	return (
		<header className="header">
    <nav className="navbar navbar-expand-lg fixed-top py-3">
        <div className="container"><a href="#" className="navbar-brand text-uppercase font-weight-bold"><img className="logo" src={gdc}/></a>
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler text-warning navbar-toggler-right">
                <i className="fa fa-bars"></i>
            </button>
            
            <div id="navbarSupportedContent" className="collapse navbar-collapse justify-content-end">
                <ul className="navbar-nav ml-5">
                    <Link to="/">
                        <li className="nav-item active"><span className="nav-link text-uppercase font-weight-bold btn_gdc">Inicio <span className="sr-only"></span></span></li>
			        </Link>
                    <Link to="/store">
                        <li className="nav-item"><span className="nav-link text-uppercase font-weight-bold mx-3 btn_gdc">Tienda</span></li>
                    </Link>
                    <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold btn_gdc">Nosotros</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold mx-3 btn_gdc">Contáctanos</a></li>
                    {localStorage.getItem("token") != undefined ? (<>
                        <Link to="/edit">
                        <div className="nav-item"><span className="nav-link"><i className="fa-solid fa-user"></i></span></div>
                        </Link>
                        <Link to="/user">
                            <div className="nav-item"><span className="nav-link"><i className="fa-solid fa-cart-shopping"></i></span></div>
                        </Link>
                        <div className="nav-item"><span type="button" className="nav-link btn-logout" onClick={(e) => {
                    actions.logOutUser();
                    bye();
                    history.push("/");
                  }}><i className="fa-solid fa-right-from-bracket"></i></span></div></>
                        ) : "" }
                    </ul>
                
            </div>
        </div>
    </nav>
</header>
	);
};
