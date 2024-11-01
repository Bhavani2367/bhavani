import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "./store";

function NonVegItems() {
  const dispatch = useDispatch();
  const nonVegProducts = useSelector((state) => state.products.nonVeg);

  const items = nonVegProducts.map((product) => (
    <li key={product.id}>
      {product.name} - ${product.price.toFixed(2)}
      <button onClick={() => dispatch(addtocart(product))}>Add to Cart</button>
    </li>
  ));

  return (
    <> 
      <h2>Non-Veg Products</h2>
      <ul>{items}</ul>
    </>
  );
}

export default NonVegItems;
