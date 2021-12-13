import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Button, Alert, Row, Select } from 'react-bootstrap';


import { createEval } from '../utils/API';
import Auth from '../utils/auth';

const AddEval = () => {

    const [formState, setFormState] = useState({
        title: '',
        agentName:'',
        author:'',
        teamleadName: '',
        empathyAndPassion: '',
        empathyAndPassionFeedback: '',
        commitment: '',
        commitmentFeedback:'',
        anticipation:'',
        anticipationFeedback: '',
        clarity: '',
        clarityFeedback: '',
        everyCustomerMatters:'',
        everyCustomerMattersFeedback:'',
        finalScore:'',
    });

    const handleInputChange = (event) => {
        var { name, value } = event.target;

        setFormState({
            ...formState, 
            [name]: value,
        });
    };

    const submitForm = async ( event ) => {
        event.preventDefault();
        event.stopPropagation();
        console.log(formState);

        

        try{
            const response = await createEval(formState);
            console.log(response);

            if (!response.ok){
                console.log(Error);
            } else if (response.ok) {
                console.log('Success!');
            }
            
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <main className="flex-row justify-center mb-4">
            <div className="col-4">
                <div className="card">
                    <h4 className="card-header bg-dark text-light p-2">Evaluation</h4>
                    <div className="card-body">
                        <form
                            className="flex-row justify-content-center"
                         onSubmit={submitForm}
                        >
                            

                            <div className='col-8'>
                                <label for='title'>Title:</label>
                                <input 
                                className='col-12'
                                name='title'
                                type='text'
                                value={formState.title}
                                onChange={handleInputChange}
                                ></input>
                            </div>

                            <div className='col-8'>
                                <label for='agentName'>Agent:</label>
                                <input 
                                className='col-12'
                                name='agentName'
                                type='text'
                                value={formState.agentName}
                                onChange={handleInputChange}
                                ></input>
                            </div>

                            <div className='col-8'>
                                <label for='author'>QA Name:</label>
                                <input 
                                className='col-12'
                                name='author'
                                type='text'
                                value={formState.author}
                                onChange={handleInputChange}
                                ></input>
                            </div>

                            <div className='col-8'>
                                <label for='teamleadName'>Team Lead:</label>
                                <input 
                                className='col-12'
                                name='teamleadName'
                                type='text'
                                value={formState.teamleadName}
                                onChange={handleInputChange}
                                ></input>
                            </div>

                            <div className='col-8'>
                                <label for="empathyAndPassion">Empathy And Passion:</label>
                                <select id="empathyAndPassion" name="empathyAndPassion" value={formState.empathyAndPassion}  onChange={handleInputChange}>
                                    
                                    <option value="" disabled selected hidden></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                   
                                </select>
                                
                            </div>
                            <div className='col-8'>
                                <label for='empathyAndPassionFeedback'>Empathy And Passion Feedback:</label>
                                <input 
                                className='col-12'
                                name='empathyAndPassionFeedback'
                                type='text'
                                value={formState.empathyAndPassionFeedback}
                                onChange={handleInputChange}
                                style={{minHeight: "150px"}}
                                ></input>
                            </div>

                            <div className='col-8'>
                                <label for="commitment">Commitment:</label>
                                <select id="commitment" name="commitment"  value={formState.commitment} onChange={handleInputChange}>
                                    <option value="" disabled selected hidden></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                               
                            </div>
                            <div className='col-8'>
                                <label for='commitmentFeedback'>Commitment Feedback:</label>
                                <input 
                                className='col-12'
                                name='commitmentFeedback'
                                type='text'
                                value={formState.commitmentFeedback}
                                onChange={handleInputChange}
                                ></input>
                            </div>

                            <div className='col-8'>
                                <label for="anticipation">Anticipation:</label>
                                <select id="anticipation" name="anticipation" value={formState.anticipation} onChange={handleInputChange}>
                                    <option value="" disabled selected hidden></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className='col-8'>
                                <label for='anticipationFeedback'>Anticipation Feedback:</label>
                                <input 
                                className='col-12'
                                name='anticipationFeedback'
                                type='text'
                                value={formState.anticipationFeedback}
                                onChange={handleInputChange}
                                style={{minHeight: "150px"}}
                                ></input>
                            </div>

                            <div className='col-8'>
                                <label for="clarity">Clarity:</label>
                                <select id="clarity" name="clarity" value={formState.clarity} onChange={handleInputChange}>
                                    <option value="" disabled selected hidden></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                
                            </div>
                            <div className='col-8'>
                                <label for='clarityFeedback'>Clarity Feedback:</label>
                                <input 
                                className='col-12'
                                name='clarityFeedback'
                                type='text'
                                value={formState.clarityFeedback}
                                onChange={handleInputChange}
                                style={{minHeight: "150px"}}
                                ></input>
                            </div>

                            <div className='col-8'>
                                <label for="everyCustomerMatters">Every Customer Matters:</label>
                                <select id="everyCustomerMatters" name="everyCustomerMatters" value={formState.everyCustomerMatters} onChange={handleInputChange}>
                                    <option value="" disabled selected hidden></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                
                            </div>
                            <div className='col-8'>
                                <label for='everyCustomerMattersFeedback'>Every Customer Matters Feedback:</label>
                                <input 
                                className='col-12'
                                name='everyCustomerMattersFeedback'
                                type='text'
                                value={formState.everyCustomerMattersFeedback}
                                style={{minHeight: "150px"}}
                                onChange={handleInputChange}
                                ></input>
                            </div>

                            <div className='col-8'>
                                <label for="finalScore">Final Score:</label>
                                <select id="finalScore" name="finalScore" value={formState.finalScore} onChange={handleInputChange}>
                                    <option value="" disabled selected hidden></option>
                                    <option value='0'>0</option>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </select>
                               
                            </div>

                            <div className="col-6">
                                <button className="btn btn-primary btn-block py-3" type="submit">
                                    Submit Evaluation
                                </button>
                            </div>
                        </form>





                    </div>
                </div>
            </div>
        </main>
    )
}

export default AddEval;