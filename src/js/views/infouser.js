import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import ReactTooltip from 'react-tooltip';

import { toast } from 'react-toastify';

export const Infouser = () => {
	const { store, actions } = useContext(Context);
    const history = useHistory();
    const [Register, setRegister] = useState({
        name: "",
        lastname: "",
        number: "",
        ident: "",
        street_address: "",
        city: "",
        state: "",
    })

    const notify = () => toast.success('Información añadida', {
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


    const send_message = async () => {

        let data = {
            "name": Register.name,
            "lastname": Register.lastname,
            "number": Register.number, 
            "identification": Register.ident,
            "street_address": Register.street_address,
            "city": Register.city,
            "state": Register.state,
        };
        console.log(data)
        if (await actions.putinfo(data)) {
           notify();
           <Redirect to={"/user"}></Redirect>
        } else {
            alert("Ha ocurrido un error");
        }
    };


    const [Error, setError] = useState({
        name: false,
        lastname: false,
        number: false,
        ident: false,
        street_address: false,
        city: false,
        state: false,
    })

    let text = /^(?=[a-zA-Z]{3,20}$)/;
    let number = /^[0-9]*$/
    let email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const add_data = (e) =>{
        setRegister({
            ...Register,
            [e.target.name] : e.target.value ,
        }); 
    };

    useEffect(() => {
        actions.getinfo();
      }, []);

    return (
        <div className="container-register">
		<svg viewBox="380 0 140 170" className="background2" xmlns="http://www.w3.org/2000/svg" >
			<path fill="#ffffff" d="M 192 449 C 356 316 435 497 531 422 C 718 290 517 203 617 61 C 677 14 425 -73 359 -3 C 302 130 158 31 -2 302 C -68 486 108 486 192 448" />
		</svg>
		
		<div className="container-login">
				
				<div className="card-user" >
						<h1 className="text-login text-center">Información</h1>
	
                        <div className="d-flex">
                            <div className="container-Input">
                                <input type="text"  id="Article"
                                            value={Register.name} 
                                            name="name" 
                                            onChange={add_data}
                                            maxLength="20"
                                            required
                                            onBlur={(e) => {
                                                if (text.test(Register.name)) {
                                                setError({ ...Error, name: false });
                                                } else {
                                                setError({ ...Error, name: true });
                                                }
                                                }}
                                            />

                        <label htmlFor="Article">Nombre</label>
                                            {Error.name && (
                                                    <span className="error" data-tip data-for="Tooltip1">
                                                    <i className="fa-solid fa-circle-exclamation" 
                                                    ></i>
                                                    <ReactTooltip
                                                        id="Tooltip1"
                                                        place="right"
                                                        textColor="white"
                                                        backgroundColor="black"
                                                        >
                                                        Nombre invalido
                                                        </ReactTooltip>
                                                </span>
                                            )}
                    </div>

                        <div className="container-Input">
                            <input type="text"  id="Article" 
                                                value={Register.lastname} 
                                                name="lastname" 
                                                onChange={add_data}
                                                maxLength="30"
                                                required
                                                onBlur={(e) => {
                                                    if (text.test(Register.lastname)) {
                                                    setError({ ...Error, lastname: false });
                                                    } else {
                                                    setError({ ...Error, lastname: true });
                                                    }
                                                    }}
                                                />
                                                
                            <label htmlFor="Article">Apellido</label>
                            {Error.lastname && (
                                                    <span className="error"
                                                    data-tip data-for="Tooltip2">
                                                    <i className="fa-solid fa-circle-exclamation"></i>
                                                    <ReactTooltip
                                                        id="Tooltip2"
                                                        place="right"
                                                        textColor="white"
                                                        backgroundColor="black"
                                                        >
                                                        Apellido invalido
                                                        </ReactTooltip>
                                                </span>
                                            )}
                        </div>
                    </div>
                    <div className="d-flex">
                    <div className="container-Input">
                        <input type="text"  
                                        id="number"
                                        value={Register.number}
                                        name="number" 
                                        minLength="10"
                                        maxLength="11"
                                        required
                                        onChange={add_data} 
                                        onBlur={(e) => {
                                            if (number.test(Register.number)) {
                                            setError({ ...Error, number: false });
                                            } else {
                                            setError({ ...Error, number: true });
                                            }
                                            }}
                                        />
                                        <label htmlFor="number" >Numero</label>
                                        {Error.number && (
                                                            <span className="error"
                                                                data-tip data-for="Tooltip3">
                                                                <i className="fa-solid fa-circle-exclamation"></i>
                                                                <ReactTooltip
                                                                    id="Tooltip3"
                                                                    place="right"
                                                                    textColor="white"
                                                                    backgroundColor="black"
                                                                    >
                                                                    Ingrese un numero de telefono correcto
                                                                    </ReactTooltip>
                                                            </span>
                                                            )}
                    </div>
                    <div className="container-Input">
                        <input type="text"  
                                        id="Article"
                                        value={Register.ident}
                                        name="ident" 
                                        minLength="8"
                                        maxLength="11"
                                        required
                                        onChange={add_data} 
                                        onBlur={(e) => {
                                            if (number.test(Register.ident)) {
                                            setError({ ...Error, ident: false });
                                            } else {
                                            setError({ ...Error, ident: true });
                                            }
                                            }}
                                        />
                                        <label htmlFor="Article">Identification</label>
                                        {Error.ident && (
                                                            <span className="error"
                                                                data-tip data-for="Tooltip4">
                                                                <i className="fa-solid fa-circle-exclamation"></i>
                                                                <ReactTooltip
                                                                    id="Tooltip4"
                                                                    place="right"
                                                                    textColor="white"
                                                                    backgroundColor="black"
                                                                    >
                                                                    Ingrese una identificacion correcta
                                                                    </ReactTooltip>
                                                            </span>
                                                            )}
                    </div>
                    </div>
                    <div className="container-Input">
                    <input type="text"  id="Article" 
                                            value={Register.street_address} 
                                            name="street_address" 
                                            maxLength="50"
                                            required
                                            onChange={add_data}
                                            />
                        <label htmlFor="Article">Direccion</label>
                
                    </div>
                    <div className="d-flex">
                        <div className="container-Input">
                        <input type="text"  id="Article" 
                                                value={Register.city} 
                                                name="city" 
                                                maxLength="50"
                                                required
                                                onChange={add_data}
                                                />
                            <label htmlFor="Article">Ciudad</label>
                            
                        </div> 
                        <div className="container-Input">
                    <input type="text"  id="Article" 
                                            value={Register.state} 
                                            name="state" 
                                            maxLength="50"
                                            required
                                            onChange={add_data}
                                            
                                            />
                        <label htmlFor="Article">Estado</label>
                        
                    </div> 
                    </div>
            
            <div className="modal-footer pt-5">
                <button type="button" className="btn btn-secondary mx-5" >Close</button>
                <button type="button" className="btn btn-warning "   onClick={send_message} disabled={Error.name ||
                                                                                                Error.lastname ||
                                                                                                Error.number ||
                                                                                                Error.ident ||
                                                                                                
                                                                                                !Register.name.length > 0 ||
                                                                                                !Register.lastname.length > 0 || 
                                                                                                !Register.number.length > 0 ||
                                                                                                !Register.ident.length > 0 ||
                                                                                                !Register.street_address.length > 0 || 
                                                                                                !Register.city.length > 0 ||
                                                                                                !Register.state.length > 0}>Enviar</button>
            </div> 
			</div>
		</div>{localStorage.getItem("token") == undefined && (
                <Redirect to={"/"}></Redirect>
            )} 
		</div>
	);
};