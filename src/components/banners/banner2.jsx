import React from 'react'

export default function () {
    return (
        <div className="diet-event">
            <div className="row justify-content-around">
                <div className="col-4">
                    <div className="dietCard">
                        <h1 className="display-5 text-light">#DIETBET</h1>
                        <h2 className="text-white">SET UP OR JOIN WEIGHT LOSS CHALLENGE</h2>
                        <p className="text-white">DietBet is a way to lose weight that works! Our games have helped 500000+ people lose weight  Join now!</p>
                    </div>
                </div>
                <div className="col-6 upcomingEvent ">
                    <h2 className="display-6 text-white font-weight-bold">UPCOMING <span className="spanEvent">NUTRITION EVENTS</span></h2>
                    <div className="d-flex">
                        <span className="spanE"></span>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="calender">
                                <span className="digit">26</span>
                                <br />
                                <span className="month">AUGUST</span>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="cal-head">
                                <p>
                                    INDIAN PHYSICAL CONGRESS,bengaluru
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 mt-3">
                            <div className="calender">
                                <span className="digit">01</span>
                                <br />
                                <span className="month">MAY</span>
                            </div>
                        </div>
                        <div className="col-9 mt-3">
                            <div className="cal-head">
                                
                                <p>
                               5TH INTERNATIONAL CONFERENCE ON DIET AND NUTRITION.(Medium:GOOGLE MEET)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}