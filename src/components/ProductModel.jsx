import { Link } from "react-router-dom";

function ProductModel({ product }) {
  return (
    <>
      <div className="container">
        <div className="card" style={{ width: 300 }}>
          <Link to={`/products/${product.slug}`}>
            <img
              style={{ width: 300, height: 300 }}
              src={product.image}
              className="card-img-top object-fit-cover"
              alt={`Imagen de ${product.image}`}
            />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">
              Price: <span>{product.price}</span>
            </p>
            <a href="#" className="btn btn-primary">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductModel;
