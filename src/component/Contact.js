import React from 'react'
import Footer from './Footer';

const Contact = () => {
    return (
        <div >
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-12 text-center py-3 my-3">
                        <h1>CONTACT US </h1>
                        <hr />
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-5">
                        <img src="/assets/contact.jfif" alt="Contact Us" height="400px" width="400px" />
                    </div>
                    <div className="col-md-6">
                        <form>
                              <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                                </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Mail " />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-outline-primary"> Send Message </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
            </>
        </div>
        
    )
}

export default Contact;
