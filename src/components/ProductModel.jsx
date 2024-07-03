import { Link } from "react-router-dom";

function ProductModel({ product }) {
  return (
    <>
      <div className="product-card">
        <div className="card shadow p-0 bg-danger" style={{ width: 300 }}>
          <Link to={`/products/${product.slug}`}>
            <img
              style={{ width: 300, height: 300 }}
              src={product.image}
              className="card-img-top object-fit-cover"
              alt={`Imagen de ${product.image}`}
            />
          </Link>
          <div className="product-card-body">
            <h5 className="card-title px-0">
              {product.name}
            </h5>
            <p className="card-text">
              Price: $ <span>{product.price}</span>
            </p>
            <button className="button-add type1">
              <span className="btn-txt">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductModel;
