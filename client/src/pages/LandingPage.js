import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './LandingPage.css';

import SignInForm from '../components/LandingPageComponents/SignInForm';
import LandingPageForm from '../components/LandingPageComponents/LandingPageForm';






const LandingPage = () => {
    return (
        <Router>

            <div className='flex-row justify-center'>
                <div className='topLeft'></div>
                <div className='topRight'></div>
                <div className='bottomLeft'></div>
                <div className='bottomRight'></div>
            </div>

            <div className='centerPiece flex-row align-items-center justify-center'>
                <Switch>
                    <Route exact path='/'>
                        <LandingPageForm />
                        <div className='developerTag'>
                            <p>Developed by Jafet Manauth</p>
                        </div>
                    </Route>
                    <Route exact path='/signin'>
                        <SignInForm />
                        <div className='developerTag'>
                            <p>Developed by Jafet Manauth</p>
                        </div>
                    </Route>
                </Switch>

            </div>



        </Router>

    );
};

export default LandingPage;