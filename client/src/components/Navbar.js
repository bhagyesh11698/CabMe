import React from "react";

function navbar() {
  return (
    <div className="container-fluid position-relative nav-bar p-0">
      <div className="container-lg position-relative p-0 px-lg-3">
        <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
          <a href="/" className="navbar-brand">
            <h1 className="m-0 text-primary">
              <span className="text-dark">Cab</span>Me
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between px-3"
            id="navbarCollapse"
          >
            <div className="navbar-nav ml-auto py-0">
              <a href="/home" className="nav-item nav-link">
                Home
              </a>
              <a href="/about" className="nav-item nav-link ">
                About
              </a>
              <a href="/offering" className="nav-item nav-link">
                Our Offerings
              </a>
              {/* <a href="package.html" className="nav-item nav-link">Posts</a> */}
              <a href="/contact" className="nav-item nav-link">
                Contact Us
              </a>
              <a href="/login" className="nav-item nav-link">
                Login
              </a>

              <a href="/create" className="nav-item nav-link">
                create
              </a>

              <a href="/rides" className="nav-item nav-link">
                rides
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default navbar;
