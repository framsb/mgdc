import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Galery } from "./galery.js";

import bg from "../../img/gold-bg.jpg";

import { Context } from "../store/appContext";

export const Filter = () =>{
    const { store, actions } = useContext(Context);
    const [ Search , setSearch] = useState("");
    const [Order , setOrder] = useState({})
    const [ Filters , setFilters ] = useState({
        category: "All",
        max_price : 0,
        min_price: 0,
        price: 0,
        });

    {/*Constante que me sirve para  filtrar el precio*/}
    const filterprice = store.filter_pr.filter((product) =>
        product.price <= Filters.price)

    {/* Funcion que sirve para evaluar el precio mayor */}
    const maxpricedata = ()=>{
        const search_price = store.products.map((product) => product.price);
        const search_max = Math.max(...search_price)
            return(Filters.max_price = search_max)
    }

{/*Ordenar por, aqui se ordena donde se tiene almacenado los productos directamente.*/}
    const updateOrder = (e) =>{
        const value = e.target.value
        setOrder(value)

        if (value == "min"){
            store.filter_pr.sort((a,b) => {return a.price - b.price })
        }
        if (value === "max"){
            console.log("si soy mayor")
            store.filter_pr.sort((a,b) => {return b.price - a.price })
        }
        if (value == "a"){
            store.filter_pr.sort((a,b) => {return a.product.localeCompare(b.product)})
        }
        if (value == "z"){
            store.filter_pr.sort((a,b) => {return b.product.localeCompare(a.product)})
        }
        }

    const updateFilters = (e) =>{
        let name = e.target.name
        let value = e.target.value

        if (name == "category"){
            setFilters({...Filters, [name] : value})
                actions.FilterCategory(value)
            }
        if (name == "price"){
            setFilters({...Filters, [name]: value})     
            }
        }

    const Priceall = (n) =>{
        const newNumber = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"}).format(n / 1);
            return newNumber;
    }

    const Initial = {   
        category: "All",
        max_price : 0,
        min_price: 0,
        price: 10000,
    }

    maxpricedata();
    useEffect(() => {
        actions.FilterCategory("All")
        setFilters({...Initial})
    }, [])
    
    return(
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-3 col-lg-2 d-md-block">
                    <form onSubmit={(e) => e.preventDefault()} className="position-sticky pt-3 sidebar-sticky">
                    {/* search input */}
                    <div className="form-control">
                        <input
                        type="text"
                        name="text"
                        placeholder="Buscar"
                        className="search-input"
                        maxLength="20"
                        value={Search}
                        onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    {/*Category*/}
                    <div className="form-control">
                        <h6 className="stylefilter">Categoria</h6>
                        <div><button type="button" name="category" value="All" className="category" onClick={updateFilters} >Todo</button>{store.categories.map((category,i)=>{
                            return(<button key={i} type="button" name="category" value={category.id_category} className="category" onClick={updateFilters} >
                                {category.category}
                            </button>)
                        })}</div>
                    </div>
                    {/* Price */}
                    <div className="form-control">
                        <h6 className="stylefilter">Precio</h6>
                        <p className="stylefilter">{Priceall(Filters.price)}</p>
                        <input
                        type="range"
                        name="price"
                        className="range"
                        onChange={updateFilters}
                        min={Filters.min_price}
                        max={Filters.max_price}
                        value={Filters.price}
                        />
                    </div>
                    </form>
            </div>
            <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex">
                <h6 className="stylefilter">{filterprice.length} productos encontrados</h6>
                <hr/>
                <form>
                    <select
                    name="order"
                    className="orderby"
                    value={Order}
                    onChange={updateOrder}
                    >
                        <option value="min">Precio(menor)</option>
                        <option value="max">Precio(mayor)</option>
                        <option value="a">Nombre(A-Z)</option>
                        <option value="z">Nombre(Z-A)</option>
                    </select>
                </form>
                </div>
                <div className="row align-items-center product-slider product-slider-4">{filterprice.length == 0 ? <h6>No hay ningun producto disponible para la busqueda actual.</h6> : filterprice.filter((search) => {return(
                        search.product.toLowerCase().includes(Search.toLowerCase()));return search;}).map((search, index) => {
                        return (
                                    <a href={`/store/${search.id_product}`} className="col-lg-3" key={index}>
                                        <Galery key={index} id_product={search.id_product} name={search.product} image={search.image} price={search.price}/>
                                    </a>
                );
                })}</div>
            </div>
            </div>
            </div>
    )
}