import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import bg from "../../img/gold-bg.jpg";
import peopleico from "../../img/people.png";
import livingico from "../../img/living.png";
import designico from "../../img/design.png";
import information from "../../img/information.jpg"

export const Services = () => {
    
    return(
        <div className="services">

    <div className="mt-2 mb-5 banner-text0">
                <img className="text-banner0"src={bg} />
                <div className="text-in0">Somos Galeria de Casa</div> 
            </div>
		<div className="container-text mt-1 mb-5">
			<div className="row justify-content-center">
				<div className="col-4 card-text text-center" style={{background: `url(${information})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                    <img src={designico} className="icon"/>
					<h5>DISEÑAMOS TU HOGAR</h5>
					<div className="information">Diseñar espacios interiores no es sólo nuestro trabajo, sino también nuestra mayor pasión, por eso vamos más allá del mero servicio de seleccionar los productos para ofrecerte. Si está buscando algo más, algo capaz de garantizarle resultados excepcionales, no dude en contactarnos: un equipo de expertos está a su disposición.</div>
				</div>
				<div className="col-4 card-text text-center"  style={{background: `url(${information})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
					<img src={peopleico} className="icon"/>
					<h5>LA MEJOR ASESORÍA</h5>
                    <div className="information">Permitenos asesorarte para que obtengas la mayor comodidad. Ya sea que solo necesite una segunda opinión sobre una elección de tela o color, o un diseñador que lo haga todo, estamos aquí para ayudarlo. Sabemos que puede ser abrumador enfrentarse a tantas opciones, ¡y nuestros diseñadores están aquí para ayudar! </div>  
				</div>
				<div className="col-4 card-text text-center"  style={{background: `url(${information})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
					<img src={livingico} className="icon"/>
					<h5>ELEGANCIA Y CALIDAD</h5>
                    <div className="information">Nuestros diseños funcionan a la perfección tanto en espacios privados como públicos y proporcionan elegantes ambientes de diseño para hogares y oficinas. Sofisticadas pero duraderas, nuestras colecciones integran a la perfección muebles de alta calidad con la elegancia.</div>
				    </div>
			</div>
        </div>
        </div>
    );
}