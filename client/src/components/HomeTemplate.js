import React, { useState } from "react";
import Booking from "./Booking";
import Rides from "./Rides";

export default function HomeTemplate() {

  const [SearchTermsTo, setSearchTermsTo] = useState("")
  const [SearchTermsDest, setSearchTermsDest] = useState("")

  const updateSearchTermTo = (newSearchTermTo) => {
    setSearchTermsTo(newSearchTermTo)
  }

  const updateSearchTermDest = (newSearchTermDest) => {
    setSearchTermsDest(newSearchTermDest)
  }
  

  return (
    <>

  <img src="img/Driver.jpg" alt="Logo" style={{"height": "80vh","width":"100vw"}} />
<Booking refreshFunctionTo={updateSearchTermTo} refreshFunctionDest={updateSearchTermDest}></Booking>
<Rides SearchTermTo={SearchTermsTo} SearchTermDest={SearchTermsDest}></Rides>
    </>
);
}
