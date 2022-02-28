
import './App.css';
import Navbar from './component/Navbar';
import "./index.css";
import Home from './component/Home';
import {  Routes,Route} from "react-router-dom";
import Products from './component/Products';
import About from './component/About';
import Product from './component/Product';  
import Login from './component/Login';
import Contact from './component/Contact';
import Cart from "./component/Cart";
import Checkout from './component/Checkout';
import Signup from './component/SignUp';


function App() {
  return (
   <>
     <Navbar /> 
     <Routes>
          <Route path="/" element={<Home/>}></Route>         
          <Route path="/products" element={<Products/>}></Route>  
          <Route path="/products/:id" element={<Product/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path="/about" element ={<About/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route> 
        </Routes>
   </>
  );
}

export default App;
