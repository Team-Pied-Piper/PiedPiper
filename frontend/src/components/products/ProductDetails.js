import React, { Fragment } from "react";
import MetaData from "../layout/MetaData";

const ProductDetails = () => {
  return (
    <Fragment>
      <MetaData title="Test Perro"></MetaData>
      <div className="row d-flex justify-content-around">
        <div className="col-12 col-lg-5 img-fluid" id="imagen_producto">
          <img
            src="../images/productos/BabyClothe-1.jpg"
            alt="Imagen_producto"
            height="450"
            width="450"
          ></img>
        </div>

        <div className="col-12 col-lg-5 mt-5">
            <h3>Ropa de Bebe</h3>
            <p id="product_id">Product ###</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
