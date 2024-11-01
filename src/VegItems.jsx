import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "./store"; 

function VegItems() {
  const dispatch = useDispatch();
  const vegProducts = useSelector((state) => state.products.veg);

  const items = vegProducts.map((product) => (
    <li key={product.id}>
      {product.name} - ${product.price.toFixed(2)}
      <button onClick={() => dispatch(addtocart(product))}>Add to Cart</button>
    </li>
  ));

  return (
    <>
      <h2>Veg Products</h2>
      <ul>{items}</ul>
    </>
  );
}
export default VegItems;
