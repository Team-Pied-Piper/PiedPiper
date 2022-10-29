import React, { Fragment, useEffect } from "react";
import MetaData from "./layout/MetaData";
import "../styles/pricing.css"
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";

const Home = () => {
  //Trae lo valores de los estados
  const { loading, productos, error } = useSelector((state) => state.products);
  const alert = useAlert();

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    dispatch(getProducts());
    alert.success("OK");
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <Fragment>
      {/*Loading*/}
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <Fragment>
          <MetaData title="The Best Comfortable Clothes"></MetaData>
          <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto album py-5 bg-light text-center">
            <h1 id="encabezado_productos" class="display-4">Best Sellers</h1>
            <p class="lead">Aquí abajo encontrara los mejores y más vendidos productos de nuestra tienda virtual Pied Piper Store</p>
          </div>
          <section id="productos" className="container mt-5 text-center center-block">
            <div className="row">
              {/*Asuma que cada elemento que encuentre es un producto (Mapeo)*/}

              {productos && productos.map((producto) => (
                  //Edito el key
                  <div
                    key={producto._id}
                    className="col-sm-12 col-md-6 col-lg-4 my-6"
                  >
                    <div className="card mb-4 rounded-3 shadow-sm" style={{width: `18rem;`}}>
                      <img
                        className="rounded mx-auto d-block"
                        //Busca en la posicion 0 del JSON la imagen
                        width="100%" height="350"
                        src={producto.imagen[0].url}
                        alt={producto.imagen[0].public_id}
                      ></img>
                      <div className="card-body d-flex flex-column">
                        <h5 id="titulo_producto">
                          <Link to={`/producto/${producto._id}`}>
                            {producto.nombre}
                          </Link>
                        </h5>
                        <div className="rating mt-auto">
                          <div className="rating-outer">
                            <div
                              className="rating-inner"
                              style={{
                                width: `${(producto.calificacion / 5) * 100}%`,
                              }}
                            ></div>
                          </div>
                          <span
                            className="badge badge-pill badge-primary ml-2"
                            id="No_de_opiniones"
                          >
                            {" "}
                            {producto.numCalificaciones} Reviews
                          </span>
                        </div>
                        <p className="card-text">${producto.precio}</p>
                        <Link
                          to={`producto/${producto._id}`}
                          id="ver_producto"
                          className="btn btn-block"
                        >
                          Ver Detalle
                        </Link>
                        <button type="button" class="w-100 btn btn-lg btn-outline-primary text-center">Comprar</button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
