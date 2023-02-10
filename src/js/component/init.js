import React from "react";
import bg from "../../img/gold-bg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import TypeWriterEffect from 'react-typewriter-effect';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import background2 from "../../img/background2.jpg";
import background3 from "../../img/background3.jpg";
import background4 from "../../img/background4.jpg";
import background5 from "../../img/background5.jpg";
import background6 from "../../img/background6.jpg";

import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Init = () => (
<div className="header">
	<div className="header-content">
		<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper1"
      >
        <SwiperSlide><img src={background2} className="header-background"/></SwiperSlide>
        <SwiperSlide><img src={background3} className="header-background"/></SwiperSlide>
        <SwiperSlide><img src={background4} className="header-background"/></SwiperSlide>
        <SwiperSlide><img src={background5} className="header-background"/></SwiperSlide>
        <SwiperSlide><img src={background6} className="header-background"/></SwiperSlide>

      </Swiper>
	  <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
		<path fill="#ffffff" fillOpacity="1"
			d="M0,32L34.3,48C68.6,64,137,96,206,96C274.3,96,343,64,411,48C480,32,549,32,617,80C685.7,128,754,224,823,234.7C891.4,245,960,171,1029,160C1097.1,149,1166,203,1234,224C1302.9,245,1371,235,1406,229.3L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
		</path>
	</svg>


			<div className="banner justify-content-center" style={{background: `url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
							<div className="card-banner text-center pt-5">
								<div>Muebles de calidad para hogares con <span className="text-2">
                              <TypeWriterEffect
                                    textStyle={{
                                      fontFamily: 'Nestone',
                                      color: '#00000',
                                      fontSize: '2.5rem',
                                    }}
                                    startDelay={2000}
                                    cursorColor="#00000"
                                    multiText={[
                                      'estilo',
                                      'elegancia',
                                      'glamour',
                                    ]}
                                    multiTextLoop={true}
                                    multiTextDelay={1000}
                                    typeSpeed={30}
                                  />
                                  </span></div>
                                    <Link to="/register">
                                    <button type="button" className="button-dark"><h5 className="text-b">Ingresar ahora</h5></button>
                                    </Link>
                                  
							</div>
			</div>
	</div>
</div>
);
