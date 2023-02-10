import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import bg from "../../img/gold-bg.jpg";
import services from "../../img/services.png"
import gdc_video from "../../img/video.mp4";

export const Services_v = () => {
    
    return(
        <>
         {/*Services Video*/}
         <div className="banner-text1">
            <img className="text-banner1"src={bg} />
        </div>
        <div className="text-center vd-gold" >
            <img className="gold-b" src={services}></img>
            <h4 className="gold">Video de nuestras instalaciones</h4>
            <video autoPlay loop muted className="video_center"><source src={gdc_video} type="audio/mp4"/></video>
        </div>
        </>
    )}