import React from 'react'
import Products from './Products';
import { Carousel } from 'react-bootstrap';
// import {useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    // let navigate = useNavigate();
    // const handleLogout = (e) => {
    //     e.preventDefault();
    //     localStorage.removeItem("id");
    //     navigate("/Login");
    //   };
    // var data = JSON.parse(localStorage.getItem("data"));
    return (
        <div>
         {/* <button onClick={handleLogout}>Logout</button> */}
            {/* <div class="card bg-dark text-white border-0">
                <img src="/assets/bg1.jpg" class="card-img" alt="Background" height="600px"/>
                    <div class="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                            <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON BEGINS</h5>
                            <p class="card-text lead fs-2">
                                This is our shop website
                            </p>
                        </div>
                        
                    </div>
            </div> */}
           <Carousel>
               <Carousel.Item>
                   <img src="/assets/bg4.jpg" height="50%" width="100%" alt="image" />
                   <Carousel.Caption >
                       <h1 className="fs-30px"> NEW SEASONS BEGINS</h1>
                       <p className="fs-21px">Welcome, This is Our website.</p>
                       </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img src="/assets/bg2.jpg" height="100%" width="100%" alt="image" />
                   <Carousel.Caption >
                       <h1 className="fs-30px"> NEW SEASONS BEGINS</h1>
                       <p className="fs-21px">Welcome, This is Our website.</p>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img src="/assets/bg3.jpg" height="100%" width="100%" alt="image" />
                   <Carousel.Caption>
                       <h1 className="fs-30px"> NEW SEASONS BEGINS</h1>
                       <p className="fs-21px">Welcome, This is Our website.</p>
                   </Carousel.Caption>
               </Carousel.Item>
           </Carousel>
            <Products />
        </div>
    );
}

export default Home;