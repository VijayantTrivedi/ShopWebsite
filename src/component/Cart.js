import React, {  useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delCart } from '../redux/action/index';
import { Link } from "react-router-dom";
const Cart = () => {

  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  
  const [quantity, setQuantity] = useState(1);
  var Count = 0;
  let Res = 1;

  const handleClose = (item) => {
    dispatch(delCart(item));
  }
  
  const handleDecrement = () => {
    if(quantity>=1){
      setQuantity(quantity-1);
    }

  }

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  }

  const grandTotal = (price) => {
    var total = (price * quantity).toFixed(2);
    return total;
  }

  const cartItems = (product) => {
    return (

      <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
        <div className="container py-4">
          <button onClick={() => handleClose(product)} className="btn-close float-end" aria-label="Close"></button>
          <div className="row justify-content-center">
            <div className="col-md-3">
              <img src={product.image} alt={product.title} height="200px" width="180px" />
            </div>
            <div className="col-md-3 text-center">
              <h3>{product.title.substring(0,12)}</h3>
              <p className="lead fw-bold ">Price : ${ grandTotal(product.price)}</p>
            </div>
            <div className="col-md-3 text-center" >
              <button className="btn btn-outline-dark me-4"
                onClick={() => handleDecrement()}>
                <i className="fa fa-minus"></i>
              </button>
              <span className='d-flex justify-content-center'>{quantity}</span>
              <button className="btn btn-outline-dark me-4"
                onClick={() => handleIncrement()}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }


  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row text-center">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  }

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <Link to="/checkout" className="btn btn-outline-primary mb-5 w-25 text-center">
            Proceed To checkout
          </Link>
        </div>
      </div>
    );
  }



  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  )
};



export default Cart;
