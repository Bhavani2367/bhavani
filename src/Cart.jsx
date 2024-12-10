import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPurchase,  clearCart,  decrement, increment, removeCart, } from './store';


function Cart() {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponDiscountPercentage, setCouponDiscountPercentage] = useState(0);

  // Function to calculate all totals (original, discounted, and savings)
  const calculateTotals = () => {
    const originalTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalDiscount = discount + couponDiscountPercentage;
    const discountedTotal = originalTotal - (originalTotal * totalDiscount) / 100;
    const savings = originalTotal - discountedTotal;
    return {
      originalTotal: originalTotal.toFixed(2),
      discountedTotal: discountedTotal.toFixed(2),
      savings: savings.toFixed(2),
    };
  };

  // Destructure the totals from calculateTotals
  const { originalTotal, discountedTotal, savings } = calculateTotals();

  // Handle discount button clicks
  const applyDiscount = (percent) => {
    setDiscount(percent);
  };

  // Handle coupon code application
  const applyCoupon = () => {
    switch(couponCode) {
      case 'RATAN10':
        setCouponDiscountPercentage(10);
        break;
      case 'RATAN20':
        setCouponDiscountPercentage(20);
        break;
      default:
        alert('Invalid coupon code');
        setCouponDiscountPercentage(0);
    }
  };

  // Reset discount percentages
  const resetDiscounts = () => {
    setDiscount(0);
    setCouponDiscountPercentage(0);
  };
  const items = cartItems.length > 0 ? (
    <ul>
      {cartItems.map((item, index) => (
        <li key={item.id || index}>
          {item.name} - ${item.price.toFixed(2)} - {item.quantity}
         
          <button onClick={() => dispatch(increment({ id: item.id }))}>+</button>
           <button onClick={() => dispatch(decrement({ id: item.id }))}>-</button>
           <button onClick={() => dispatch(removeCart({ id: item.id }))}>Remove</button>

        </li>
      ))}
    </ul>
  ) : (
    <p>There are no items in the cart.</p>
  ); 
  
  const handleCompletePurchase = () => {
    const { discountedTotal } = calculateTotals();
    const PurchaseDate = new Date().toLocaleDateString();
  
    const purchaseDetails = {
      date: PurchaseDate,
      items: [...cartItems],
      totalAmount: Number(discountedTotal),  // Use discountedTotal here
    };
    dispatch(clearCart());
    dispatch(addPurchase(purchaseDetails));
  };


  return (
    <>
      <h3>Cart Items</h3>
      {items}

      <h4>Total bill before discount: ${originalTotal}</h4>
    
      <button style={{ marginRight: '10px' }} onClick={() => applyDiscount(10)}>Apply Discount 10%</button>
      <button style={{ marginRight: '10px' }} onClick={() => applyDiscount(20)}>Apply Discount 20%</button>
      <button style={{ marginRight: '10px' }}onClick={() => applyDiscount(30)}>Apply Discount 30%</button>
      <button style={{ marginRight: '10px' }} onClick={resetDiscounts}>No Discount</button>

      {/* Coupon code input */}
      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button style={{ marginRight: '10px' }} onClick={applyCoupon}>Apply Coupon</button>
      </div>

      <p>Discount Percentage Applied: {discount}%</p>
      <p>Coupon Discount Percentage: {couponDiscountPercentage}%</p>
      <p>Discount Amount: ${savings}</p>
      <h4>Final Bill After Discount: ${discountedTotal}</h4>
      <button onClick={handleCompletePurchase}>Complete Purchase</button>

    </>
  );

}

export default Cart;
