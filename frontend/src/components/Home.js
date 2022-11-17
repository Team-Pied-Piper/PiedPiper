import React, { Fragment, useEffect, useState } from "react";
import MetaData from "./layout/MetaData";
import "../styles/pricing.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import { Link, useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import Pagination from 'react-js-pagination'
import Slider from "rc-slider"
import 'rc-slider/assets/index.css'

const Home = () => {

  const params = useParams();
  const keyword = params.keyword;
  const [precio, setPrecio] = useState([1000,400000])
  const [currentPage, setCurrentPage] = useState(1)

  //Trae lo valores de los estados
  const { loading, products, error, resPerPage, productsCount } = useSelector((state) => state.products);
  const alert = useAlert();
  

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    dispatch(getProducts(currentPage, keyword,precio));
    //alert.success("OK");
    // eslint-disable-next-line
  }, [dispatch, alert, error, currentPage, keyword, precio]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber)
  }

  return (
    <Fragment>
      {/*Loading*/}
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <Fragment>
          <MetaData title="The Best Comfortable Clothes"></MetaData>

          <div class="py-4 text-center">
            <h2>Pied Piper Clothes</h2>
            <p class="lead">
              Aquí abajo encontrara los mejores y más vendidos productos de
              nuestra tienda virtual Pied Piper Store.
            </p>
          </div>

          <section id="productos" className="container mt-5">
            <div className="row">
              {products &&
                products.map((producto) => (
                  <div
                    key={producto._id}
                    className="col-sm-12 col-md-6 col-lg-3 my-3"
                  >
                    <div className="card text-center">
                      <img
                        className="card-img-top "
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
                          <span id="No_de_opiniones">
                            {" "}
                            {producto.numCalificaciones} Reviews
                          </span>
                        </div>
                        <p className="card-text ">${producto.precio}</p>
                        <Link
                          to={`/producto/${producto._id}`}
                          id="view_btn"
                          className="btn btn-block"
                        >
                          Ver detalle
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

              <Slider
                range
                className = 't-slider'
                marks={{
                  100:`$1000`,
                  400000:`$400000`
                }}
                min={1000}
                max={400000}
                defaultValue={[1000,400000]}
                tipFormatter={value => `$${value}`}
                tipProps={{
                  placement:'bottom',
                  prefixCls: 'rc-slider-tooltip',
                  visible: true
                }}
                value={precio}
                onChange={precio => setPrecio(precio)}
              ></Slider>
            </div>
          </section>

          <div className="d-flex justify-content-center mt-5">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resPerPage}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNo}
              nextPageText={"Siguiente"}
              prevPageText={"Anterior"}
              firstPageText={"Primera"}
              lastPageText={"Ultima"}
              itemClass="page-item"
              linkClass="page-link"
            />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
