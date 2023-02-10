import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import purchase from "../../img/purchase.gif";
import "../../styles/info.css";
import { toast } from 'react-toastify';

export const Modalshop = (props) => {
    const { store, actions } = useContext(Context);
    const [Payment, setPayment] = useState("")
    const history = useHistory();

    const notify = () => toast.info('✨ Enviada la referencia bancaria, por favor espera la revision del mismo', {
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

    const bankreference = async () => {
        const data = {
            state_payment : "En revisión",
            bank_reference: Payment
        }
        if (await actions.putpayment(props.id,data)) {
        notify();
        location.reload()
        } else {
            alert("Ha ocurrido un error")
        }
    }


    return(
        <div>
        <button type="button" className="btn btn-log mx-5" data-bs-toggle="modal" data-bs-target="#staticBackdroper">Pagar</button>

        <div className="modal fade" id="staticBackdroper" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-body">

            <div className=" card-body px-5 pt-5">
            <h3 className="text-center big-check"><img src={purchase}/></h3>
            <p className="text-center">Los pagos se realizan a traves de las cuentas</p>
            <p className="text-center">Una vez que se verifique el pago, se estara realizando contacto directo con usted</p>
            <p className="text-center">¿Cómo puedes contactarnos? Tienes dos opciones: Por mensaje directo a través de nuestra 
            cuenta de Instagram @Mueblesgaleriadecasa o a través de los contactos de WhatsApp que encuentras en el footer.</p>
            <div className="container-Input">
                        <input type="text"  
                                        id="payment"
                                        name="number" 
                                        minLength="10"
                                        maxLength="13"
                                        required
                                        onChange={(e)=> setPayment(e.target.value)} 
                                        />
                                        <label htmlFor="number">Numero</label>
                    </div>
            </div>
            </div>
            {/* Fin de registro de articulos */}
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary"  data-bs-dismiss="modal" onClick={()=>{bankreference()}}>Enviar</button>
            </div>

            </div>
        </div>
        </div>
		</div>
    )
}