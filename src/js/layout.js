import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Store } from "./views/store";
import { OneProduct } from "./views/oneproduct";
import injectContext from "./store/appContext";
import { Register } from "./views/register"
import { Infouser } from "./views/infouser"
import { Info } from "./views/info"
import { Order_detail } from "./views/order_detail.js"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";



	return (
		<div>
			<ToastContainer />
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/store">
							<Store />
						</Route>
						<Route exact path="/store/:id">
							<OneProduct />
						</Route>
						<Route exact path="/Register">
							<Register />
						</Route>
						<Route exact path="/user">
							<Info />
						</Route>
						<Route exact path="/edit">
							<Infouser />
						</Route>
						<Route exact path="/order/:id">
							<Order_detail />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
