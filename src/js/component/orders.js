import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/info.css";

export const Orders= () => {
	const { store, actions } = useContext(Context);
    const history = useHistory();


return (
    <div>
    <table className="table-order">
                <thead className="py-5">
                    <tr className="table-header">
                        <th className="text-center px-5 mx-5"></th>
                        <th className="text-center px-5 mx-2">Fecha de creacion</th>
                        <th className="text-center px-5 mx-2">Estado de pago</th>
                        <th className="text-center px-5 mx-2">Estado de venta</th>
                        <th></th>
                    </tr>
                </thead>
        </table>
        <div className="table-cnt"> 
        <table className= "table-order">
                <tbody>
                    {store.orders.all && store.orders.all.map((object, index) => {
                return (<tr className="table-color" key={index}>
                        <td>{object.id_order}</td>
                        <td >{object.created}</td>
                        <td >{object.state_payment}</td>
                        <td>{object.status_sale}</td>
                        <td>
                        <Link to={`/order/${object.id_order}`}>
                            <button type="button" className="btn btn-warning">
                                            revisar
                                            </button>
                        </Link>
                        </td>
                    </tr>)})}   
                </tbody>
            </table>
        </div>
        </div>
);
}