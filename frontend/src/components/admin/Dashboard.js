import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Sidebar from "./Sidebar";

export const Dashboard = () => {
  return (
    <Fragment>
      <div class="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-3">
            <Sidebar />
          </div>

          <div className="col-12 col-sm-9">
            <h1 className="my-4">Dashboard</h1>

            <Fragment>
              <MetaData title={"Administracion"} />

              {/* Tarjeta 1*/}

              <div className="row pr-4">
                <div className="col-xl-12 col-sm-12 mb-3">
                  <div className="card border-primary mb-3">
                    <div className="card-body text-primary">
                      <div className="text-center card-font-size">
                        Monto Total
                        <br /> <b>$2.000.000</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarjeta 2*/}

              <div className="row pr-4">
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="card border-success mb-3 o-hidden h-100">
                    <div className="card-body text-success">
                      <div className="text-center card-font-size ">
                        Productos
                        <br /> <b>6</b>
                      </div>
                    </div>
                    <Link
                      className="card-footer text-success clearfix small z-1"
                      to="/admin/products"
                    >
                      <span className="float-left">Ver Detalles</span>
                      <span className="float-right">
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Tarjeta 3*/}

                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="card border-danger mb-3 o-hidden h-100">
                    <div className="card-body text-danger">
                      <div className="text-center card-font-size">
                        Pedidos
                        <br /> <b>34</b>
                      </div>
                    </div>
                    <Link
                      className="card-footer text-danger clearfix small z-1"
                      to="/admin/orders"
                    >
                      <span className="float-left">Ver Detalles</span>
                      <span className="float-right">
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Tarjeta 4*/}

                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="card border-info mb-3 o-hidden h-100">
                    <div className="card-body text-info">
                      <div className="text-center card-font-size">
                        Usuarios
                        <br /> <b>12</b>
                      </div>
                    </div>
                    <Link
                      className="card-footer text-info clearfix small z-1"
                      to="/admin/users"
                    >
                      <span className="float-left">Ver Detalles</span>
                      <span className="float-right">
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Tarjeta */}

                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="card border-dark mb-3 o-hidden h-100">
                  <div className="card-body text-dark">
                      <div className="text-center card-font-size">
                        Agotados
                        <br /> <b>20</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
