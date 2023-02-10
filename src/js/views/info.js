import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Cart } from "../component/cart.js"
import { Modalorder } from "../component/modalorder.js"
import { Orders } from "../component/orders.js"
import "../../styles/info.css";

import { toast } from 'react-toastify';

export const Info = () => {
	const { store, actions } = useContext(Context);
    const history = useHistory();
 
    useEffect(() => {
        actions.getinfo();
    }, []);

    const loadorder = () => toast(' ❗ Cargando las ordenes, espere', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });


    const error = () => toast.warning('No posee ningun item', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    const addthis = async () => {
        const data = store.user.id_info
        if (await actions.getincart(data)) {
            
        } else {
            error();
        }
    };

    const get_order = async () => {
        if (await actions.get_orders()) {
        } else {
            error();
        }
    };

    const showthis = (e) =>{
        if (e.target.value === "1"){
            let cart = document.getElementById("shopcart");
            let order = document.getElementById("shop");
            let show = document.getElementById("hid")
            if (cart.style.display === "none"){
                cart.style.display = "block";
                order.style.display = "block";
                show.innerHTML = "ocultar"
                addthis()
                }else{
                cart.style.display = "none";
                order.style.display = "none"
                show.innerHTML = "mostrar"
            }
        }
        if (e.target.value === "2"){
            let cart = document.getElementById("shopcart2");
            let show = document.getElementById("hid2")
            if (cart.style.display === "none"){
                cart.style.display = "block";
                show.innerHTML = "ocultar"
                loadorder();
                get_order();
                }else{
                cart.style.display = "none";
                show.innerHTML = "mostrar"
            }
        }
    }

    return (
        <div className="container-register">
		<svg viewBox="280 0 500 320" className="background2" xmlns="http://www.w3.org/2000/svg" >
			<path fill="#ffffff" d="M 341 0 C 132 -7 285 233 85 280 C -25 336 35 400.6667 10 461 C -52 592 86.6667 589.6667 125 654 C 212 792 356.3333 652.6667 472 652 C 725 657 570.6667 500 620 424 C 694 326 872 286 799 158 C 769 100 870 2 709 -16 C 566 -62 521 61 342 0" />
		</svg>
		
		<div className="container-info">
            <div className="d-flex">
				<div className="shop-list">
                    <div className="shop-head">
                        <h1 className="text-infor me-5 flex-grow-1 bd-highlight"> Mi Carrito</h1>
                        <div id="shop">
                            <Modalorder />
                        </div>
                        <button type="button" id="hid" className="btn btn-log ms-5" value="1" onClick={(e) =>showthis(e)}>Mostrar</button>
                    </div>
                    <div className="shop-body">
                        <div id="shopcart">
                            <Cart />
                        </div>
                    </div>
                    <div className="shop-head my-5">
                        <h1 className="text-infor flex-grow-1 bd-highlight"> Mis Ordenes</h1>
                        <button type="button" id="hid2" className="btn btn-log ms-5" value="2" onClick={(e) =>showthis(e)}>Mostrar</button>
                    </div>
                    <div className="shop-body">
                        <div id="shopcart2">
                            <Orders />
                        </div>
                    </div>
                </div>
                <div className="infor">
                    <div className="card-info" >
                            <table>
                                <thead>
                                    <tr>
                                        <th>Datos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Nombre:</th>
                                        <th>{store.user.name}</th>
                                    </tr>
                                    <tr>
                                        <th>Apellido:</th>
                                        <th>{store.user.lastname}</th>
                                    </tr>
                                    <tr>
                                        <th>CI:</th>
                                        <th>{store.user.identification}</th>
                                    </tr>
                                    <tr>
                                        <th>Email:</th>
                                        <th>{store.user.email}</th>
                                    </tr>
                                    <tr>
                                        <th>Direccion:</th>
                                        <th>{store.user.street_address},{store.user.city},{store.user.state}</th>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="modal-footer">
                                <Link to="/edit">
                                <button type="button" className="btn btn-log">Editar informacion</button></Link>
                            </div> 
                    </div>
                </div>
			</div>
		</div> { store.user.id_info == null && (
                <Redirect to={"/edit"}></Redirect>
            )}{localStorage.getItem("token") == undefined && (
                <Redirect to={"/"}></Redirect>
            )} 
		</div>
	);
};