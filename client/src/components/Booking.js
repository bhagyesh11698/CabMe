import React, { useState } from 'react'


export default function Booking(props) {

const [SearchTermsTo, setSearchTermsTo] = useState("")
const [SearchTermsDest, setSearchTermsDest] = useState("")

const onChangeSearchTo = (event) => {
    setSearchTermsTo(event.target.value)
    props.refreshFunctionTo(event.target.value)
}

const onChangeSearchDest = (event) => {
    setSearchTermsDest(event.target.value)
    props.refreshFunctionDest(event.target.value)
}

  return (
    <div className="container-fluid booking mt-5 pb-5">
        <div className="container pb-5">
            <div className="bg-light shadow" style={{"padding": "30px"}}>
                <div className="row align-items-center" style={{"min-height": "60px"}}>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="mb-3 mb-md-0">
                                    {/* <select className="custom-select px-4" style={{"height": "47px"}}>
                                        <option selected>To</option>
                                        <option value="1">Destination 1</option>
                                        <option value="2">Destination 1</option>
                                        <option value="3">Destination 1</option>
                                    </select> */}

                                {/* Source */}
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-default">Source</span>
                                    </div>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        aria-label="Default" 
                                        aria-describedby="inputGroup-sizing-default" 
                                        value={SearchTermsTo}
                                        onChange={onChangeSearchTo.bind(this)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="mb-3 mb-md-0">
                                {/* <select className="custom-select px-4" style={{"height": "47px"}}>
                                        <option selected>From</option>
                                        <option value="1">Destination 1</option>
                                        <option value="2">Destination 1</option>
                                        <option value="3">Destination 1</option>
                                    </select> */}

                                    {/* Destination */}
                                    <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-default">Destination</span>
                                    </div>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        aria-label="Default" 
                                        aria-describedby="inputGroup-sizing-default"
                                        value={SearchTermsDest}
                                        onChange={onChangeSearchDest.bind(this)}
                                         />
                                    </div>
                                </div>
                            </div>

                            {/* Date picker */}
                            {/* <div className="col-md-4">
                                <div claclassName="mb-3 mb-md-0">
                                    <div className="date" id="date2" data-target-input="nearest">
                                        <input type="text" className="form-control p-4 datetimepicker-input" placeholder="Date and Time " data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                            </div> */}

                            {/* Ride Options */}
                            {/* <div className="col-md-3">
                                <div className="mb-3 mb-md-0">
                                    <select className="custom-select px-4" style={{"height": "47px"}}>
                                        <option selected>Transit Medium</option>
                                        <option value="1">RideShare</option>
                                        <option value="2">LocalCab</option>
                                        <option value="3">UHAUL</option>
                                    </select>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* Button */}
                    {/* <div className="col-md-2">
                        <button className="btn btn-primary btn-block" type="submit"  style={{"height": "47px", "margin-top": "-2px"}}>Find Trip</button>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}
