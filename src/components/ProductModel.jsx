import { Link } from "react-router-dom";

function ProductModel({ product }) {
  return (
    <>
      <div className="product-card">
        <div
          className="card shadow p-0 position-relative"
          style={{ width: 300 }}
        >
          <Link to={`/products/${product.slug}`}>
            <img
              style={{ width: 300, height: 300 }}
              src={product.image}
              className="card-img-top object-fit-cover"
              alt={`Imagen de ${product.image}`}
            />
          </Link>
          <i className="bi bi-suit-heart-fill fs-3 card-heart"></i>
          <div className="product-card-body">
            <h5 className="card-title px-0">{product.name}</h5>
            <p className="card-text">
              Price: $ <span>{product.price}</span>
            </p>

            <div className="d-flex align-items-center w-100 p-2">
              <div className="fs-4">
                <i className="bi bi-dash-circle fs-5"></i>
                <span className="ms-1">0</span>
                <i className="ms-1 bi bi-plus-circle fs-5"></i>
              </div>
              <button className=" w-50 button-add type1">
                <i className="bi bi-cart2 fs-4"></i>
                {/* <span className="btn-txt ms-3">Add to cart</span> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductModel;
