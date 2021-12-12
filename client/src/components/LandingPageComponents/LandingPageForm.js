import React from 'react';
import { Link } from 'react-router-dom';


const LandingPageForm = () => {
    return (
        <div className='holder'>
            <div className='form'>
                <h1>iQA</h1>
                <h4>Industry leading, cutting edge, QA software.</h4>
                <div className='link'>
                    <Link to='/signin' >Sign In</Link>
                </div>
            </div>
            
        </div>
    );
};

export default LandingPageForm;