import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/info.css";

import { toast } from 'react-toastify';

export const Cart = () => {
	const { store, actions } = useContext(Context);
    const history = useHistory();

    const notify = () => toast.success('✨ Eliminado!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        ;

        const error = () => toast.error('Ocurrio un error, recarga la pagina', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

    const removethis = async (id_product) => {
        const user = store.user.id_info
        const data = id_product
        if (await actions.removeincart({"id_client" : user,"id_product": data})) {
            notify();
        } else {
            error();
        }
    };
    

    return (
        <div>
            <table className="table-order">
                <thead className="py-5">
                    <tr className="table-hd">
                        <th ></th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
        </table>
        <div className="table-cnt"> 
        <table className= "table-order">
                <tbody>
                            {store.cart == "" ? " No posee ningun item agregado al carrito" : store.cart.map((object, index) => {
                        return (<tr className="table-color" key={index}>
                                <td><img className="image-cart"src={object.image}/></td>
                                <td >{object.product}</td>
                                <td >{object.price}$</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                <button type="button" className="btn btn-remove" onClick={()=> {removethis(object.id_product)}}>
                                                <i className="fa-solid fa-xmark"></i>
                                                </button></td>
                            </tr>)})}   
                        </tbody>
                    </table>
                </div>
        </div>
    )}