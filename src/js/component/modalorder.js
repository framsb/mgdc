import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import shopp from "../../img/shopp.gif";
import "../../styles/info.css";

import { toast } from 'react-toastify';

export const Modalorder = () => {
    const { store, actions } = useContext(Context);
    const history = useHistory();

    const neworder = async () => {
        const data = {
            id_client: store.user.id_info
        }
        if (await actions.create_order(data)) {
        } else {
            alert("Ha ocurrido un error")
        }
    }

    const notify = () => toast.success('✨ Orden creada!', {
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

    const details = async () => {

        const list = store.cart && store.cart.map((data)=>{
            return({"id_order": store.order.id_order,
                    "id_product": data.id_product,
                    "sub_total": data.price})
        })
        const total = store.cart && store.cart.map((data)=>{
            return(data.price)
        })
        const sum = total.reduce((a,b)=> a+b,0)
        const pricetotal = {"total": sum}

        if (await Promise.all([actions.send_details(list)],[actions.put_total(store.order.id_order, pricetotal)])) {
            notify();
            history.push(`/order/${store.order.id_order}`)
        } else {
            alert("Ha ocurrido un error")
        }
    }


    return(
        <div>
        <button type="button" className="btn btn-log py-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  onClick={()=>{neworder()}}>Ordenar</button>

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-body">

            <div className=" card-body px-5 pt-5">
            <h3 className="text-center big-check"><img src={shopp}/></h3>
            <h3 className="text-center">¿Seguro que desea generar una orden de compra?</h3>
            </div>
            </div>
            {/* Fin de registro de articulos */}
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary"  data-bs-dismiss="modal" onClick={()=>{details()}}>Enviar</button>
            </div>
            </div>
        </div>
        </div>
		</div>
    )
}