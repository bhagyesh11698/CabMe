import React from 'react'
import { useState } from 'react';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const history = useNavigate();

    const [postData, setPostData] = useState({
        
            email: "",
            password: "",
          });
        
          const url = "http://localhost:5001/users/signin";
          const clear = () => {
            setPostData({
              email: "",
              password: "",
             
            });
          };
        
          const submit = (e) => {
            // debugger
            e.preventDefault();
            console.log(postData);
            Axios.post(url, {
              email: postData.email,
              password: postData.password,
            })
              .then((res) => res.postData)
              .then(clear());
            history('/')  
          };
    

  return (
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="text-center mb-3 pb-3">
            <h6 className="text-primary text-uppercase" style={{"letter-spacing": "5px"}}>Login</h6>
                {/* <h1>Login As A Driver</h1> */}
            </div>

            {/* Login Form */}
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="contact-form bg-white" style={{"padding": "30px", "border-radius": "10px"}}>
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                <div className="row mb-3">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                    <input type="email" 
                                    onChange={(e) =>
                                        setPostData({ ...postData, email: e.target.value })}
                                    className="form-control" id="inputEmail3" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                    <div className="col-sm-10">
                                    <input type="password" 
                                    onChange={(e) =>
                                        setPostData({ ...postData, password: e.target.value })} 
                                    className="form-control" id="inputPassword3" />
                                    </div>
                                </div>

                                {/* Radio Buttons */}
                                <fieldset className="row mb-3" style={{"margin-top": "25px"}}>
                                    <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="rideShare" value="rideShare" checked /> 
                                        <label className="form-check-label" htmlFor="gridRadios1">
                                        Ride Share
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="cabService" value="cabService" />
                                        <label className="form-check-label" htmlFor="gridRadios2">
                                        Cab Service
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="movers" value="movers" />
                                        <label className="form-check-label" htmlFor="gridRadios3">
                                        Mover
                                        </label>
                                    </div>
                                    </div>
                                </fieldset>

                                {/* Login Button */}
                                <div className="text-center">
                                    <button type="submit" 
                                    onClick={submit} 
                                    className="btn btn-primary btn-lg">Login</button>
                                </div>


                                {/* Register buttons */}
                                <div className="text-center" style={{"margin-top": "15px"}}>
                                    <p>Not a member? <a href="/register">Register</a></p>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}