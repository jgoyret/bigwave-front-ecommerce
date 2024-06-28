import React from "react";

function Product() {
  return (
    <>
      <div className="card bg-transparent" style={{ width: 300 }}>
        <img
        style={{width:300, height:300}}
          src="https://f.fcdn.app/imgs/9e3062/www.lamolienda.uy/moliuy/fe88/webp/catalogo/168127_168127_1/450x450/vegamon-jucy-lucy-vegamon-jucy-lucy.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Vegamon</h5>
          <p className="card-text">
            Tan rico que tus papilas gustativas bailaran plena
          </p>
          <p className="card-text">
            Price: <span>$256</span>
          </p>
          <a href="#" className="btn btn-primary">
           Add to cart
          </a>
        </div>
      </div>
    </>
  );
}

export default Product;
