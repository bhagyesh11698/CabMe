import React from "react";
import Booking from "./Booking";
import Rides from "./Rides";

export default function HomeTemplate() {
  return (
    <>

  <img src="img/Driver.jpg" alt="Logo" style={{"height": "100vh","width":"100vw"}} />
<Booking></Booking>
<Rides></Rides>
    </>
);
}
