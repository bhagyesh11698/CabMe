import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const history = useNavigate();

  const [postData, setPostData] = useState({
    contact: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const url = "http://localhost:5001/users/signup";
  const clear = () => {
    setPostData({
      contact: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  };

  const submit = (e) => {
    // debugger
    e.preventDefault();
    console.log(postData);
    Axios.post(url, {
      contact: postData.comtact,
      firstname: postData.firstname,
      lastname: postData.lastname,
      email: postData.email,
      password: postData.password,
    })
      .then((res) => res.postData)
      .then(clear());
    history("/");
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="text-center mb-3 pb-3">
          <h6
            className="text-primary text-uppercase"
            style={{ "letter-spacing": "5px" }}
          >
            Register
          </h6>
          <h1>Register Your Self</h1>
        </div>

        {/* Register Form */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="contact-form bg-white"
              style={{ padding: "30px", "border-radius": "10px" }}
            >
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" novalidate="novalidate">
                <div className="row mb-3">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    First Name:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      onChange={(e) =>
                        setPostData({ ...postData, firstname: e.target.value })
                      }
                      className="form-control"
                      id="inputfirstname"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-2 col-form-label"
                  >
                    Last Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      onChange={(e) =>
                        setPostData({ ...postData, lastname: e.target.value })
                      }
                      className="form-control"
                      id="inputlastname"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-2 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      onChange={(e) =>
                        setPostData({ ...postData, email: e.target.value })
                      }
                      className="form-control"
                      id="inputemail"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-2 col-form-label"
                  >
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      onChange={(e) =>
                        setPostData({ ...postData, password: e.target.value })
                      }
                      className="form-control"
                      id="inputpassword"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-2 col-form-label"
                  >
                    Contact
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      onChange={(e) =>
                        setPostData({ ...postData, contact: e.target.value })
                      }
                      className="form-control"
                      id="inputcontact"
                    />
                  </div>
                </div>

                <fieldset className="row mb-3" style={{ "margin-top": "25px" }}>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="rideShare"
                        value="rideShare"
                        checked
                      />
                      <label className="form-check-label" htmlFor="gridRadios1">
                        Ride Share
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="cabService"
                        value="cabService"
                      />
                      <label className="form-check-label" htmlFor="gridRadios2">
                        Cab Service
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="movers"
                        value="movers"
                      />
                      <label className="form-check-label" htmlFor="gridRadios3">
                        Mover
                      </label>
                    </div>
                  </div>
                </fieldset>

                <div className="text-center">
                  <button
                    type="submit"
                    onClick={submit}
                    className="btn btn-primary btn-lg"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
