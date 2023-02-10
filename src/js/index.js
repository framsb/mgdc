//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";
import "swiper/css/bundle";

import "../libs/bootstrap/css/bootstrap.min.css";
import "../libs/bootstrap/js/bootstrap.bundle.js";
import "../libs/fontawesome/css/all.min.css";
import "../libs/fontawesome/css/all.css";
import "../libs/fontawesome/css/fontawesome.min.css";
import "../libs/fontawesome/js/all.min.js"

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
