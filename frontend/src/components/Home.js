import React, { Fragment, useEffect } from "react";
import MetaData from "./layout/MetaData";
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
          <h1 id="encabezado_productos">Ultimos Productos</h1>
          <section id="productos" className="container mt-5">
            <div className="row">
              {/*Asuma que cada elemento que encuentre es un producto (Mapeo)*/}

              {productos &&
                productos.map((producto) => (
                  //Edito el key
                  <div
                    key={producto._id}
                    className="col-sm-12 col-md-6 col-lg-3 my-3"
                  >
                    <div className="card-img rounded p-2">
                      <img
                        className="card-img-top mx-auto"
                        //Busca en la posicion 0 del JSON la imagen
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
