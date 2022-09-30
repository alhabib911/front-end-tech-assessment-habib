import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Style.css'

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <div className='landing-img-section'>
                <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220930%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220930T094347Z&X-Amz-Expires=86400&X-Amz-Signature=4765af36278a1761980f6fa971dc518bee01991c2b193a1ebde49b43c48ed01a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject" alt="" />
            <div className='landing-button-md'>
                <Link to='/event'>🎉 Create my event</Link>
            </div>
            </div>
            <div className='landing-content'>
                <h1>Imagine if <br />
                    <span>Snapchat</span> <br />
                    had events.</h1>
                <p>Easily host and share events with your friends <br /> across any social media.</p>

                <div className='landing-button'>
                    <Link to='/event'>🎉 Create my event</Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;