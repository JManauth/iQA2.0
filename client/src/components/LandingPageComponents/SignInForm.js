import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignInForm = () => {
    return (
        <div>
            <Container fluid className='justify-center flex-row'>
                <h4>Sign In</h4>
                <Form>
                    <Row>
                    <Form.Group>
                        {/* <Form.Label htmlFor='email'>Email</Form.Label> */}
                        <Form.Control
                            type='text'
                            placeholder='Your Email'
                            name='email'
                            required />
                        <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                    </Form.Group>
                    </Row>
                    <Form.Group>

                        <Form.Control
                            type='password'
                            placeholder='Your password'
                            name='password'
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                    </Form.Group>
                    <Row>
                    <Button
                        // disabled={!(userFormData.email && userFormData.password)}
                        type='submit'
                        variant='success'>
                        Submit
                    </Button>
                    </Row>
                </Form>
            </Container>
        </div>
    );
};

export default SignInForm;