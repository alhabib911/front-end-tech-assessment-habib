import React from 'react';
import { ImCalendar, ImLocation2 } from 'react-icons/im';
import { MdArrowForwardIos } from 'react-icons/md';
import Cake from '../../Image/Birthdaycake.png'
import '../Style/Style.css'

const Event = () => {
    return (
        <div className='event-page'>
            <div className='event-content'>
                <div>
                    <h1>Birthday Bash</h1>
                    <small>Hosted by <span className='host'>Elysia</span></small>
                </div>
                <div>
                    <div className="arrow">
                        <div className='calender'>
                            <div className='calender-icon'>
                                <ImCalendar />
                            </div>
                            <div className='calender-content'>
                                <h4 className='date-time'>18 August 6:00PM</h4>
                                <p>to <span className='time-date'>19 August 1:00PM</span> UTC +10</p>
                            </div>
                        </div>
                        <div className='arrow-icon'>
                            <MdArrowForwardIos />
                        </div>
                    </div>
                    <div className="arrow">
                        <div className='location'>
                            <div className='location-icon'>
                                <ImLocation2 />
                            </div>
                            <div className='location-content'>
                                <h4>Street name</h4>
                                <p>Suburb, State, Postcode</p>
                            </div>
                        </div>
                        <div className='arrow-icon'>
                            <MdArrowForwardIos />
                        </div>
                    </div>
                </div>
            </div>
            <div className='cake-img'>
                <img src={Cake} alt="" />
            </div>
        </div>
    );
};

export default Event;