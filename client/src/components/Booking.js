import React from 'react'

export default function Booking() {
  return (
    <div className="container-fluid booking mt-5 pb-5">
        <div className="container pb-5">
            <div className="bg-light shadow" style={{"padding": "30px"}}>
                <div className="row align-items-center" style={{"min-height": "60px"}}>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mb-3 mb-md-0">
                                    <select className="custom-select px-4" style={{"height": "47px"}}>
                                        <option selected>To</option>
                                        <option value="1">Destination 1</option>
                                        <option value="2">Destination 1</option>
                                        <option value="3">Destination 1</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3 mb-md-0">
                                <select className="custom-select px-4" style={{"height": "47px"}}>
                                        <option selected>From</option>
                                        <option value="1">Destination 1</option>
                                        <option value="2">Destination 1</option>
                                        <option value="3">Destination 1</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div claclassName="mb-3 mb-md-0">
                                    <div className="date" id="date2" data-target-input="nearest">
                                        <input type="text" className="form-control p-4 datetimepicker-input" placeholder="Date and Time " data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                            </div>
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
                    <div className="col-md-2">
                        <button className="btn btn-primary btn-block" type="submit" style={{"height": "47px", "margin-top": "-2px"}}>Find Trip</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
