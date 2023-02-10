import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import ReactTooltip from 'react-tooltip';

import { toast } from 'react-toastify';


export const Modal_register = () => {
	const { store, actions } = useContext(Context);
    const history = useHistory();
    const [Register, setRegister] = useState({
        email: "",
        password: "",
    })

    const notify = () => toast.success('Cliente creado exitosamente, logeate con tu usuario!', {
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

    const reload = () =>{
        location.reload()
    }

    const send_register = async () => {
        let data = {
            email: Register.email,
            password: Register.password,
        };
        if (await actions.register(data)) {
            notify();
                reload()
        } else {
            alert("Ha ocurrido un error");
        }
    };


    const [Error, setError] = useState({
        email: false,
        password: false,
    })

    let email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/; //

    const add_data = (e) =>{
        setRegister({
            ...Register,
            [e.target.name] : e.target.value ,
        }); 
    };

    return (
        <div className="card-login">
            <div className="login-body">
            <h1 className="text-login text-center">Crea tu cuenta</h1>
                    <div className="container-Input">
                    <input type="text"  id="email" 
                                            value={Register.email} 
                                            name="email" 
                                            maxLength="50"
                                            required
                                            onChange={add_data}
                                            onBlur={(e) => {
                                                if (email.test(Register.email)) {
                                                setError({ ...Error, email: false });
                                                } else {
                                                setError({ ...Error, email: true });
                                                }
                                                }}
                                            />
                        <label htmlFor="email">Email</label>
                        {Error.email && (
                                                            <span className="error"
                                                                data-tip data-for="Tooltip4">
                                                                <i className="fa-solid fa-circle-exclamation"></i>
                                                                <ReactTooltip
                                                                    id="Tooltip4"
                                                                    place="right"
                                                                    textColor="white"
                                                                    backgroundColor="black"
                                                                    >
                                                                    Ingrese un email correcto
                                                                    </ReactTooltip>
                                                            </span>
                                                            )}
                            </div>
                            <div className="container-Input">
                            <input type="text"  id="Article" 
                                                value={Register.password} 
                                                name="password" 
                                                onChange={add_data}
                                                maxLength="30"
                                                required
                                                onBlur={(e) => {
                                                    if (password.test(Register.password)) {
                                                    setError({ ...Error, password: false });
                                                    } else {
                                                    setError({ ...Error, password: true });
                                                    }
                                                    }}
                                                />
                                                
                            <label htmlFor="Article">Contraseña</label>
                            {Error.password && (
                                                            <span className="error"
                                                                data-tip data-for="Tooltip2">
                                                                <i className="fa-solid fa-circle-exclamation"></i>
                                                                <ReactTooltip
                                                                    id="Tooltip2"
                                                                    place="right"
                                                                    textColor="white"
                                                                    backgroundColor="black"
                                                                    >
                                                                    Recuerda que tu contraseña debe tener: 8 caracteres, 1
                                                                    letra minúscula, 1 letra mayúscula, 1 número y 1
                                                                    caracter especial.
                                                                    </ReactTooltip>
                                                            </span>
                                                            )}
                        </div>
                        
            {/* Fin de loggeo*/}
            <div className="login-footer d-flex justify-content-end">
                    <button type="button" className="btn btn-close" onClick={reload}>volver</button>
                <button type="button" className="btn btn-in mx-2"  onClick={send_register} disabled={Error.email ||
                                                                                                Error.password ||
                                                                                                !Register.email.length > 0 ||
                                                                                                !Register.password.length > 0 
                                                                                                }>Entrar</button>
            </div> 
            {localStorage.getItem("token") != undefined && (
                <Redirect to={"/store"}></Redirect>
            )}
            </div>
            </div>
	);
};