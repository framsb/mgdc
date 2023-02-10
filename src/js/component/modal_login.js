import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import ReactTooltip from 'react-tooltip';

import { toast } from 'react-toastify';

export const Modal_login = () => {
	const { store, actions } = useContext(Context);
    const history = useHistory();
    const [Login, setLogin] = useState({
        email: "",
        password:""
    })

    const notify = () => toast('✅Se ha logeado exitosamente', {
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

    const send_login = async () => {
        let data = { 
            email: Login.email,
            password: Login.password,
        };
        if (await actions.Login(data)) {
            notify();
        } else {
            alert("Ha ocurrido un error");
        }
    };


    const [Error, setError] = useState({
        email: false,
    })

    let email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const reload = () =>{
        location.reload()
    }
    const add_data = (e) =>{
        setLogin({
            ...Login,
            [e.target.name] : e.target.value ,
        }); 
    };

    return (
        <div className="card-login">
            <div className="login-body">
            <h1 className="text-login text-center">Login</h1>
                    <div className="container-Input">
                    <input type="text"  id="email" 
                                            value={Login.email} 
                                            name="email" 
                                            maxLength="50"
                                            required
                                            onChange={add_data}
                                            onBlur={(e) => {
                                                if (email.test(Login.email)) {
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
                                                value={Login.password} 
                                                name="password" 
                                                onChange={add_data}
                                                maxLength="30"
                                                required
                                                />
                                                
                            <label htmlFor="Article">Contraseña</label>
                        </div>
                        
            {/* Fin de loggeo*/}
            <div className="login-footer d-flex justify-content-end">
                    <button type="button" className="btn btn-close" onClick={reload}>volver</button>
                <button type="button" className="btn btn-in mx-2"  onClick={send_login} disabled={Error.email ||
                                                                                                !Login.email.length > 0 ||
                                                                                                !Login.password.length > 0 
                                                                                                }>Entrar</button>
            </div>
            </div>
            </div>
	);
};