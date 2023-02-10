import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay , Navigation } from "swiper";
import bg from "../../img/gold-bg.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { object } from "prop-types";

export const Carousel_home = () => {
        const { store, actions } = useContext(Context);
    return(
        <div className="container pb-5">

            <div className="mt-2 mb-5 banner-text">
                <img className="text-banner"src={bg} />
                <div className="text-in">Novedades</div> 
            </div>

         <Swiper
        slidesPerView={3}    
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Pagination, Navigation]}
        className="mySwiper pb-5"
      >

        {/*Novedades, los ultimos cargados en la tienda*/}

        {store.products && store.products.slice(2).reverse().map((product,i) =>{            
            return ( <div key={i}>
        <SwiperSlide key={i}><img className="carousel-image" src={product.image}/></SwiperSlide>
                    </div>
            )})}
            </Swiper>
    </div>
);
}

