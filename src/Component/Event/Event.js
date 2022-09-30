import React from 'react';
import { ImCalendar, ImLocation2 } from 'react-icons/im';
import Cake from '../../Image/Birthdaycake.png'
import '../Style/Style.css'

const Event = () => {
    return (
        <div>
            <div>
                <div>
                    <h1>Birthday Bash</h1>
                    <small>Hosted by Elysia</small>
                </div>
                <div>
                    <div>
                        <ImCalendar />
                    </div>
                    <div>
                        <p>18 August 6:00PM</p>
                        <p>to 19 August 1:00PM UTC +10</p>
                    </div>
                </div>
                <div>
                    <div>
                        <ImLocation2/>
                    </div>
                    <div>
                        <p>Street name</p>
                        <p>Suburb, State, Postcode</p>
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