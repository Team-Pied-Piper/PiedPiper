import React, { Fragment, useEffect } from "react";
import MetaData from "./layout/MetaData";
import {useDispatch} from 'react-redux'
import { getProducts } from "../actions/productActions";

const Home = () => {

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getProducts());
  }, [dispatch] )

  return (
    <Fragment>
      <MetaData title="The Best Comfortable Clothes"></MetaData>
      <h1 id="encabezado_productos">Ultimos Productos</h1>
      
      <section id="productos" className="container mt-5">
        <div className="row">
          {/*Producto 1*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card-img rounded p-2">
              <img
                className="card-img-top mx-auto"
                src="https://drive.google.com/uc?id=17glhFr3zTYl0z-8jbaBoer6VihzlyySv"
                alt="Hoddie S1"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000">Hoddie Pied Piper Verde</a>
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span
                    className="badge badge-pill badge-primary ml-2"
                    id="No_de_opiniones"
                  >
                    {" "}
                    5 reviews
                  </span>
                </div>
                <p className="card-text">$140.000</p>
                <a
                  href="http://localhost:3000"
                  id="ver_producto"
                  className="btn btn-block"
                >
                  Ver detalle
                </a>
              </div>
            </div>
          </div>

          {/*Producto 2*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card-img rounded p-2">
              <img
                className="card-img-top mx-auto"
                src="https://drive.google.com/uc?id=13-Uj8ohCpukfhOjHo3dH89c4e7IgV-o0"
                alt="Hoddie 2"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000">Hoddie Pied Piper Blanco</a>
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span
                    className="badge badge-pill badge-primary ml-2"
                    id="No_de_opiniones"
                  >
                    {" "}
                    13 reviews
                  </span>
                </div>
                <p className="card-text">$140.000</p>
                <a
                  href="http://localhost:3000"
                  id="ver_producto"
                  className="btn btn-block"
                >
                  Ver detalle
                </a>
              </div>
            </div>
          </div>
          {/*Producto 3*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card-img rounded p-2">
              <img
                className="card-img-top mx-auto"
                src="https://drive.google.com/uc?id=11KeTlyGTZTRNOFcmb8EbTBWt3D42rCVn"
                alt="Hoddie 3"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000">Open Hoddie Pied Piper Black</a>
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span
                    className="badge badge-pill badge-primary ml-2"
                    id="No_de_opiniones"
                  >
                    {" "}
                    3 reviews
                  </span>
                </div>
                <p className="card-text">$138.000</p>
                <a
                  href="http://localhost:3000"
                  id="ver_producto"
                  className="btn btn-block"
                >
                  Ver detalle
                </a>
              </div>
            </div>
          </div>

          {/*Producto 4*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card-img rounded p-2">
              <img
                className="card-img-top mx-auto"
                src="https://drive.google.com/uc?id=1DNJ4oj3579E_8doAaeenzzG0BClUDHwn"
                alt="T-Shirt V1"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000">T-Shirt Pied Piper - Black S1</a>
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span
                    className="badge badge-pill badge-primary ml-2"
                    id="No_de_opiniones"
                  >
                    {" "}
                    25 reviews
                  </span>
                </div>
                <p className="card-text">$70.000</p>
                <a
                  href="http://localhost:3000"
                  id="ver_producto"
                  className="btn btn-block"
                >
                  Ver detalle
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
