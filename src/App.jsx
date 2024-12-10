import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import Home from "./Home";

import './App.css';
import { useSelector } from "react-redux";
import ConactUs from "./ConactUs";

import NonVegItems from "./NonVegItems";
import GoogleLoginComponent from "./GoogleLoginComponent";
import { GoogleOAuthProvider } from "@react-oauth/google";
import VegItems from "./VegItems";
import FacebookLoginComponent from "./FacebookLoginComponent";
import NotFound from "./NotFound";
import GitLoginComponent from "./GitLoginComponent";
import { FaHistory, FaHome, FaInfoCircle, FaPhone, FaShoppingCart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import PurchaseHistory from "./PurchaseHistory";
import Login from "./Login";


function App() {
  const cart = useSelector((state) => state.cart); 
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
   

    <BrowserRouter>
    <nav>
  <Link to="/home"><FaHome /> Home</Link>
  <Link to="/vegItems"><GiShoppingBag /> VegItems</Link>
  <Link to="/nonvegItems"><GiShoppingBag /> NonVegItems</Link>
  <Link to="/cart"><FaShoppingCart/> Cart ({totalItems})</Link>
  <Link to="/aboutus"><FaInfoCircle /> About Us</Link>
  <Link to="/contactus"><FaPhone /> Contact Us</Link>
  <Link to="/PurchaseHistory"><FaHistory/> Purchase History</Link>
  <Link to="/Login"><FaHistory/>Login</Link>


  
</nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/vegItems" element={ <VegItems />} />
        <Route path="/nonvegItems" element={<NonVegItems/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ConactUs />} />
        <Route path="/PurchaseHistory" element={<PurchaseHistory />} />
        <Route path="/Login" element={<Login/>} /> 


        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
