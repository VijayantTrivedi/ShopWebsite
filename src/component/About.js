import React from 'react';
import './About.css';
import Contact from './Contact';

const  About = () => {
    return (
        <div>
        <div className="section">
        <div className="container">
            <div className= "content-section">
                <div className="title">
                    <h1 className="display-6 fw-bolder text-center">About Us</h1>
                </div>
                <div className="content">
                    <h3>This is Content</h3>
                    <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit,
                    sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.Ut enim add
                    minim veniam</p>
                    <div className="button">
                        <a href="">Read More</a>
                    </div>
                </div>
            </div>
            <div className="image-section">
            <img src="/assets/bg1.jpg" />
            </div>
            
        </div>
            
        </div>
        <Contact />
     </div>   
    )
}

export default About;