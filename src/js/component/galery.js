import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Galery = (props) =>{
    const { store, actions } = useContext(Context);


    return(
        <div className="productitem">
            <div className="card p-0">
                    <div className="card-image">
                        <img src={props.image} alt=""/>
                    </div>
                    <div className="card-content d-flex flex-column px-3">
                        <h6 className="pt-2">{props.name}</h6>
                        <h6>{props.price}$</h6>
                    </div>
                    
            </div>
        </div>
    )}

