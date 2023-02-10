import React from "react";
import "../../styles/home.css";
import { Carousel_home }  from "../component/carousel_home.js";
import { Init } from "../component/init.js";
import { Services } from "../component/services.js";
import { Services_v } from "../component/services_v.js";

export const Home = () => (
<div>
	<Init />
	<Services />
	<Services_v />
	<Carousel_home />
</div>
);
