import React from "react";
import NavBarApp from "../components/NavBarApp";

function Product() {
  return (
    <>
      <NavBarApp />;
      <div className="container d-flex">
        <div className="">
          <img
            className="rounded"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hH_58iIG0z-_wmBd1JAjzs2igwkM6S-jYA&s"
          />
        </div>
        <div className=" ms-3">
          <h3>Granola</h3>
          <p>$90</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            soluta, beatae ducimus quaerat tenetur quod suscipit, quas ipsa,
            iste nostrum officiis doloribus fuga magnam natus facilis voluptates
            consequatur cumque omnis.
          </p>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </>
  );
}

export default Product;
