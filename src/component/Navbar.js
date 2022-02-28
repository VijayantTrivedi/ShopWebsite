import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';
import axios from "axios";


const Navbar = () => {
    const [data,setData] = useState("");
    // var res = JSON.parse(localStorage.getItem("data"));
    
    
    const state = useSelector((state) => state.handleCart)

    let navigate = useNavigate();


    const handleLogout = (e) => {
        e.preventDefault();

        navigate("/login");
        localStorage.clear();

    };

    
    useEffect(() =>{
        // getData();
   

    
        var email = JSON.parse(localStorage.getItem("username"));
        var password = JSON.parse(localStorage.getItem("password"));
        axios
        .get("https://fakestoreapi.com/users")
        .then((response) =>{
            const user = response.data.find(
                (x) => x.username === email && x.password === password
            );
            setData(user);
            localStorage.setItem("data",JSON.stringify(user));
        })
        .catch((error) => 
        console.log(`Error ${error}`)
        );
    
}, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand fw-bold fs-7" to="/">
                        Collection
                    </Link>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active " aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>
                            <li className='nav-item'>
                                {/* <p  className="nav-link active">{data.name.firstname} {data.name.lastname}</p> */}

                            </li>
                        </ul>
                        
                        <Nav>
                             
                                 <NavDropdown title={data ?.length === 0 ? (
                                    <p>No Data</p>
                                ) :(
                                     <p>{data.name.firstname}
                                     {data.name.lastname}</p> 
                                )}> 
                                {/* <NavDropdown> */}
                                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <div className="buttons">
                        <Link to="/login" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-sign-in me-1"></i>Login
                            </Link>        


                            <Link to="/signup" className="btn btn-outline-dark ms-2">
                            <i className="fa fa-sign-out me-1"></i> Signup
                            </Link>


                            <Link to="/cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i>Cart({state.length})
                            </Link>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;
