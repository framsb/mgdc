import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import image from "../../img/image.jpg";
import image2 from "../../img/bathroom.jpg";
import image3 from "../../img/bedroom.jpg";
import image4 from "../../img/space.jpg";
import image5 from "../../img/stand.jpg";

import { Context } from "../store/appContext";

import "../../styles/store.css";
import { Filter } from "../component/filter.js";
import TypeWriterEffect from 'react-typewriter-effect';

export const Store = () => {
	const { store, actions } = useContext(Context);
    const myRef = document.querySelector('.scrollable-div')
	return (
        <div>
            <div style={{background: "none",width: "100%", height: "100px"}}></div>
            <div className="container text-center">
            <div className="container text-center">
            <div className="row row-cols-5 row-cols-lg-5">
                <div className="col">
                    <img src={image} className="image-title" />
                </div>
                <div className="col">
                    <img src={image2} className="image-title" />
                </div>
                <div className="col">
                    <img src={image3} className="image-title" />
                </div>
                <div className="col">
                    <img src={image4} className="image-title" />
                </div>
                <div className="col">
                    <img src={image5} className="image-title" />
                </div>
            </div>
            </div>
            </div>

            <Filter />

        </div>
    )}