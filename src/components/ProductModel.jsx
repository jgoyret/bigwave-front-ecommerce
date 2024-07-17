import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, checkAndAddToCart } from "../redux/cartReducer";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductModel({ product }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [units, setUnits] = useState(1);

  const handleAddToCart = () => {
    if (units <= 0) {
      toast.info("Units must be higher than 0");
    } else {
      const entrieProduct = { ...product, quantity: units };
      dispatch(checkAndAddToCart(entrieProduct));
      setUnits(1);
    }
  };

  const handleDecreaseUnits = () => {
    if (units > 1) {
      setUnits(units - 1);
    }
  };

  const handleIncreaseUnits = () => {
    product.stock > units
      ? setUnits(units + 1)
      : toast.info("No more stock available");
  };

  return (
    <>
      <div className="product-card p-0 ">
        <Link to={`/products/${product.slug}`}>
          <img
            style={{ width: 300, height: 300 }}
            src={product.image}
            className="card-img-top object-fit-cover"
            alt={`Imagen de ${product.image}`}
          />
        </Link>
        {/* <i className="bi bi-suit-heart-fill fs-3 card-heart"></i> */}
        <div className="product-card-body">
          <h5 className="card-title px-0">
            {product.name} <span>{product.netWeight}</span>
          </h5>
          <p className="card-text mt-3">
            Price: $ <span>{product.price}</span>
          </p>

          <div className="d-flex align-items-center w-100 p-2">
            <div className="fs-4">
              <i
                onClick={handleDecreaseUnits}
                className="bi bi-dash-circle fs-5"
              ></i>
              <span className="mx-2 fs-5">{units}</span>
              <i
                onClick={handleIncreaseUnits}
                className="bi bi-plus-circle fs-5"
              ></i>
            </div>
            <button onClick={handleAddToCart} className="w-25 button-add type1">
              <i className="bi bi-cart2 fs-4"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductModel;
