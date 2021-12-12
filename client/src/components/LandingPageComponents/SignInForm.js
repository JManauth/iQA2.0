import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { signIn } from '../../utils/API'

const SignInForm = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '', })
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const response = await signIn(userFormData);

            if (!response.ok) {
                throw new Error('Something Went Wrong!');
            }
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            email: '',
            password: '',
        });
    };

    return (
        <div>
            <Container fluid className='justify-center flex-row'>
                <h4>Sign In</h4>
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                        Something went wrong with your login credentials!
                    </Alert>
                    <Row>
                        <Form.Group>
                            {/* <Form.Label htmlFor='email'>Email</Form.Label> */}
                            <Form.Control
                                type='text'
                                placeholder='Your Email'
                                name='email'
                                onChange={handleInputChange}
                                value={userFormData.email}
                                required />
                            <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group>

                        <Form.Control
                            type='password'
                            placeholder='Your password'
                            name='password'
                            onChange={handleInputChange}
                            value={userFormData.password}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                    </Form.Group>
                    <Row>
                        <Button
                            disabled={!(userFormData.email && userFormData.password)}
                            type='submit'
                            variant='success'>
                            Submit
                        </Button>
                    </Row>
                </Form>

                <Link to='/'>Back</Link>
            </Container>
        </div>
    );
};

export default SignInForm;