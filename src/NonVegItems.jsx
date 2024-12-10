import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "./store";

function NonVegItems() {
  const dispatch = useDispatch();
  const nonVegProducts = useSelector((state) => state.products.nonVeg);

  // Map over the non-veg products and create the list with images
  const items = nonVegProducts.map((product) => (
    <li key={product.id}>
      {/* Display the product image */}
      <img 
        src={`/image/${product.image}`}  // Assuming product.image contains the image filename
        alt={product.name} 
        style={{ width: '100px', height: '100px' }} 
      />
      <p>{product.name} - ${product.price.toFixed(2)}</p>
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
