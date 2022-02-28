import React from 'react';

const Footer = () => {
    return (
        <div className="main-footer bg-light shadow-sm py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled ">
                            <li>Moscow</li>
                            <li>Main st</li>
                            <li>phone : 9999999999</li>
                            <li>Email:-name@gmail.com</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Active Link</h4>
                        <ul className="list-unstyled">
                            <li>Home</li>
                            <li>About</li>
                            <li>Product</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Link</h4>
                        <ul className="list-unstyled">
                            <li>Link1</li>
                            <li>Link2</li>
                            <li>Link3</li>
                            <li>Link4</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;
