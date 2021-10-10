import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';


import { createUser } from '../utils/API';
import Auth from '../utils/auth';

const SignUp = () => {
    const [formState, setFormState] = useState({
        username: '',
        firstName: '',
        lastName: '',
        userType: '',
        email: '',
        password: '',
        teamLead: '',
    });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    // const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleInputChange = (event) => {
        var { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log(formState);

        try {
            const response = await createUser(formState);
            console.log(response)

            if (!response.ok) {
                throw new Error('something went wrong!')
            } 
            const { token, user } = await response.json();
            console.log(user);
            Auth.login(token);
            if (response.ok){
                return <Redirect to='/add-eval' />
            }
        } catch(err) {
            console.error(err);
            setShowAlert(true);
        }

        
    };

    return (
        <main className="flex-row justify-center mb-4">
            <div className="col-12 col-lg-10">
                <div className="card">
                    <h4 className="card-header bg-light-blue text-light p-2">Create New User</h4>
                    <div className="card-body">
                        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                            {/* show alert if server response is bad */}
                            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                                Something went wrong with your signup!
                            </Alert>

                            <Form.Group>
                                <Form.Label htmlFor='username'>Username</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='username'
                                    name='username'
                                    
                                    onChange={handleInputChange}
                                    value={formState.username}
                                    required
                                />
                                <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor='firstName'>First Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Your first name'
                                    name='firstName'
                                    onChange={handleInputChange}
                                    value={formState.firstName}
                                    required
                                />
                                <Form.Control.Feedback type='invalid'> First name is required!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor='lastName'>Last Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Your last name'
                                    name='lastName'
                                    onChange={handleInputChange}
                                    value={formState.lastName}
                                    required
                                />
                                <Form.Control.Feedback type='invalid'> Last name is required!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor='userType'>User Type</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='User Type'
                                    name='userType'
                                    onChange={handleInputChange}
                                    value={formState.userType}

                                />

                            </Form.Group>

                            {/* <Form.Group>
                                <Form.Label htmlFor='userType'>User Type</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group> */}

                            <Form.Group>
                                <Form.Label htmlFor='email'>Email</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Your email address'
                                    name='email'
                                    onChange={handleInputChange}
                                    value={formState.email}
                                    required
                                />
                                <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor='password'>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Your password'
                                    name='password'
                                    onChange={handleInputChange}
                                    value={formState.password}
                                    required
                                />
                                <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor='teamLead'>TeamLead</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Your Team Lead'
                                    name='teamLead'
                                    onChange={handleInputChange}
                                    value={formState.teamLead}

                                />

                            </Form.Group>

                            <Button
                                disabled={!(formState.username && formState.firstName && formState.lastName && formState.email && formState.password && formState.userType)}
                                type='submit'
                                variant='success'>
                                Submit
                            </Button>
                        </Form>


                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignUp;