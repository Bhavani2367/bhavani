import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'; // Import axios here
import { addtocart, fetchProducts } from "./store"; // Import fetchProducts action from store

// Define the async function to fetch products if it's not defined elsewhere
const getProducts = async () => {
  try {
    const response = await axios.get("YOUR_API_ENDPOINT_HERE"); // Replace with actual endpoint
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

function VegItems() {
  const dispatch = useDispatch();
  const vegProducts = useSelector((state) => state.products.veg);

  // Fetch products when the component mounts
  useEffect(() => {
    dispatch(fetchProducts()); // Ensure fetchProducts is properly imported from your actions
  }, [dispatch]);

  const items = vegProducts?.map((product) => (
    <li key={product.id}>
      {/* Display the product image */}
      <img src={`/image/${product.image}`} alt={product.name} style={{ width: '100px', height: '100px' }} />
      <p>{product.name} - ${product.price.toFixed(2)}</p>
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
