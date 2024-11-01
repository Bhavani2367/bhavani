import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import Home from "./Home";

import ParchaseHistory from "./ParchaseHistory";
import './App.css';
import { useSelector } from "react-redux";
import ConactUs from "./ConactUs";

import NonVegItems from "./NonVegItems";
import GoogleLoginComponent from "./GoogleLoginComponent";
import { GoogleOAuthProvider } from "@react-oauth/google";
import VegItems from "./VegItems";

function App() {
  const cart = useSelector((state) => state.cart); 
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
    <GoogleOAuthProvider clientId="333625709155-1pm7hjmqnf8ik2gdcb0nmam0u36miik3.apps.googleusercontent.com">
      <GoogleLoginComponent />
    </GoogleOAuthProvider>
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/vegItems">VegItems</Link>
        <Link to="/nonvegItems">NonVegItems</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/contactus">Contact Us</Link>
        <Link to="/ParchaseHistory">Purchase History</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/vegItems" element={ <VegItems />} />
        <Route path="/nonvegItems" element={<NonVegItems/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ConactUs />} />
        <Route path="/ParchaseHistory" element={<ParchaseHistory />} /> 
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
