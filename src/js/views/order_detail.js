import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect,useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Modalshop } from "../component/modalshop.js"


import jsPDF from "jspdf";



import "../../styles/info.css";
import "../../styles/one-order.css";

export const Order_detail = () => {
	const { store, actions } = useContext(Context);
    const { id } = useParams();
    const history = useHistory();
    const notify = () => toast("Wow so easy !");

    const onlyorder = async (id) => {
        if (await actions.get_one_order(id)) {
            notify();
        } else {
            alert("Ha ocurrido un error");
        }
    };
    useEffect(() => {
        onlyorder(id);
        actions.getinfo();
    }, []);

    const generatepdf = () => {
        var doc = new jsPDF("p", "pt", "a4");
        doc.html(document.querySelector("#contentpdf"),
        {
            callback: function(pdf){
                pdf.save("myorder.pdf");

            }
        })
    }

return (
    <div className="container-register">

        <svg viewBox="280 0 500 320" className="background2" xmlns="http://www.w3.org/2000/svg" >
            <path fill="#ffffff" d="M 341 0 C 132 -7 285 233 85 280 C -25 336 35 400.6667 10 461 C -52 592 86.6667 589.6667 125 654 C 212 792 356.3333 652.6667 472 652 C 725 657 570.6667 500 620 424 C 694 326 872 286 799 158 C 769 100 870 2 709 -16 C 566 -62 521 61 342 0" />
        </svg>
        
        <div className="container-info">
            <div className="order-user d-flex ">
                <div className="user">
                    <i className="fa-solid fa-user"></i>
                </div>
                <div className="card-info pt-4" id="contentpdf">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Datos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Comprador:</th>
                                        <th> {store.user.name},{store.user.lastname}</th>
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
                </div>      
            </div>
            <div className="card-info align-left" id="contentpdf2">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Referencia de banco:</th>
                                        <th>{store.onlyone.bank_reference == null ? "Pendiente" : store.onlyone.bank_reference}</th>
                                    </tr>
                                    <tr>
                                        <th>Status de la compra:</th>
                                        <th> {store.onlyone.status_sale}</th>
                                    </tr>
                                    <tr>
                                        <th>Pago:</th>
                                        <th>{store.onlyone.state_payment}</th>
                                    </tr>
                                    <tr>
                                        <th>Fecha de entrega:</th>
                                        <th>{store.onlyone.delivery_date == null ? "A espera de la compra" : store.onlyone.delivery_date}</th>
                                    </tr>
                                    <tr>
                                        <th>Fecha de creacion de orden:</th>
                                        <th>{store.onlyone.created}</th>
                                    </tr>
                                </tbody>
                            </table>
                    </div>  
            <div className="order-info">
                <table className="table-order">
                    <thead className="py-5">
                    <tr className="table-header">
                            <th className="text-center px-5 mx-5">N°</th>
                            <th className="text-center px-5 mx-2">Descripcion</th>
                            <th className="text-center px-5 mx-2">Precio</th>
                            <th className="text-center px-5 mx-2">Total</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>

            <div className="table-cnti"> 
            <table className= "table-order">
                    <tbody>
                    {store.onlyone.details && store.onlyone.details.map((object, index) => {
                    return (<tr className="table-color" key={index}>
                            <td className="arrow text-center">{index}</td>
                            <td className="text-center">{object.product_name}</td>
                            <td className="text-center">{object.sub_total}</td>
                            <td className="text-center">{store.onlyone.total}</td>
                            <td></td>
                        </tr>)})}
                    </tbody>
                </table>
        </div>
        <div className="d-flex">
            {store.onlyone.bank_reference == null ? <div id="shopp">
                <Modalshop id={id} /> </div> : <></>
             }
            <button type="button" className="btn btn-log mx-5" onClick={()=> generatepdf()}>Generar tu recibo</button>
        </div>
        </div>
        </div>
        
    </div>
)}