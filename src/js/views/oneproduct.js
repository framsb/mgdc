import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/oneproduct.css";
import bg from "../../img/gold-bg.jpg";
import services from "../../img/services.png"

import { toast } from 'react-toastify';

export const OneProduct = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	useEffect(() => {
		actions.Oneproduct(id);
		actions.getinfo();
	}, [])
	
	const add = () => {
		toast.success('Producto agregado', {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			});
	}

	const error = () => {
		toast('Este producto ya fue agregado', {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			});
	}
	const addthis = async () => {

        let data = {
            id_client: store.user.id_info,
            id_product: store.one_product.id_product,
        };

			if (await actions.addincart(data)) {
			add();
			} else {
			error();
			}
    };

	return (
		<div style={{backgroundImage: `url(${services})`,width: "100%"}}>
			<div style={{background: "none",width: "100%", height: "100px"}}></div>
				<div className="container">
					<div className="row g-0 card-product"> 
						<div className="col-6 col-md-4">
						<img src={store.one_product.image} alt="logo" className="product-img" />
						<div className="card-button">
							{store.user.id_info == null ? <></> :
							<button type="button" className="btn btn-outline-warning"  onClick={addthis}>
									<i className="fas fa-heart" />
							</button> }
                    	</div>
						</div>
						<div className="col-sm-6 col-md-8"> 
						<div className="info-product">
							<h1 className="title-product">{store.one_product.product}</h1>
							<img className="line3"src={bg} />
							<h6>Detalles</h6>
							<p>{store.one_product.description}</p>
							<p className="specif">
								<span>Precio : </span>
								{store.one_product.price}$
							</p>
								<img className="line3"src={bg} />
							<div className="text-center">
							<Link to="/store">
								<span className="btn btn-warning" href="#" role="button">
									volver al store
								</span>
							</Link>
							</div>
						</div>
					</div>
				</div>
		</div>

			
		</div>
	);
};

OneProduct.propTypes = {
	match: PropTypes.object
};
