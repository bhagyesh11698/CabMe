import React from 'react'

export default function footer() {
  return (
    <div>
    <div className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style={{"margin-top": "90px"}}>
        <div className="row pt-5">
            <div className="col-lg-3 col-md-6 mb-5">
                <a href="" className="navbar-brand">
                    <h1 className="text-primary"><span className="text-white">Cab</span>Me</h1>
                </a>
                <p>We provide best service for Reasonable ride including many more options</p>
                <h6 className="text-white text-uppercase mt-4 mb-3" style={{"letter-spacing": "5px"}}>Follow Us</h6>
                <div className="d-flex justify-content-start">
                    <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h5 className="text-white text-uppercase mb-4" style={{"letter-spacing": "5px"}}>Usefull Links</h5>
                <div className="d-flex flex-column justify-content-start">
                    <a className="text-white-50 mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Home</a>
                    <a className="text-white-50 mb-2" href="/about"><i className="fa fa-angle-right mr-2"></i>About</a>
                    <a className="text-white-50 mb-2" href="/offering"><i className="fa fa-angle-right mr-2"></i>Our Offerings</a>
                    
                    <a className="text-white-50 mb-2" href="/contact"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                 
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h5 className="text-white text-uppercase mb-4" style={{"letter-spacing": "5px"}}>Our Services</h5>
                <div className="d-flex flex-column justify-content-start">
                    <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>RideShare Posts</a>
                    <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Local Cabs Service</a>
                    <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Movers</a>
                    
                  
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h5 className="text-white text-uppercase mb-4" style={{"letter-spacing": "5px"}}>Contact Us</h5>
                <p><i className="fa fa-map-marker-alt mr-2"></i>29,Obermeyer Drive</p>
                <p><i className="fa fa-phone-alt mr-2"></i>+1(416)567-9999</p>
                <p><i className="fa fa-envelope mr-2"></i>cabme@gmail.com</p>
                <h6 className="text-white text-uppercase mt-4 mb-3" style={{"letter-spacing": "5px"}}>Newsletter</h6>
                <div className="w-100">
                    <div className="input-group">
                        <input type="text" className="form-control border-light"  placeholder="Your Email"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary px-3">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
       <center> <p>Copyright &copy;CabMe All Rights Reserved.</p></center>
    </div>
    </div>
    
    </div>
   
  )
}
