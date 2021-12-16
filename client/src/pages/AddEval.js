import React, { useState } from 'react';
import { createEval, allUsers } from '../utils/API';
// import Auth from '../utils/auth';

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
                            

                            <div className='col-10'>
                                <label htmlFor='title'>Title:</label>
                                <input 
                                className='col-12'
                                name='title'
                                type='text'
                                value={formState.title}
                                onChange={handleInputChange}
                                ></input>
                            </div>

                            <div className='col-10'>
                                <label htmlFor='teamleadName'>Team Lead:</label>
                                <input 
                                className='col-12'
                                name='teamleadName'
                                type='text'
                                value={formState.teamleadName}
                                onChange={handleInputChange}
                                ></input>
                            </div>

                            <div className='col-10'>
                                <label htmlFor='agentName'>Agent:</label>
                                <input 
                                className='col-12'
                                name='agentName'
                                type='text'
                                value={formState.agentName}
                                onChange={handleInputChange}
                                ></input>
                            </div>

                            <div className='col-10'>
                                <label htmlFor='author'>QA Name:</label>
                                <input 
                                className='col-12'
                                name='author'
                                type='text'
                                value={formState.author}
                                onChange={handleInputChange}
                                ></input>
                            </div>

                            

                            <div className='col-10'>
                                <label htmlFor="empathyAndPassion">Empathy And Passion:</label>
                                <select id="empathyAndPassion" name="empathyAndPassion" value={formState.empathyAndPassion}  onChange={handleInputChange} style={{width: "47px"}}>
                                    
                                    <option value="" disabled defaultValue hidden></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                   
                                </select>
                                
                            </div>
                            <div className='col-10'>
                                <label htmlFor='empathyAndPassionFeedback'>Empathy And Passion Feedback:</label>
                                <textarea 
                                className='col-12'
                                name='empathyAndPassionFeedback'
                                type='text'
                                value={formState.empathyAndPassionFeedback}
                                onChange={handleInputChange}
                                style={{minHeight: "150px"}}
                                >
                                    
                                </textarea>
                            </div>

                            <div className='col-10'>
                                <label htmlFor="commitment">Commitment:</label>
                                <select id="commitment" name="commitment"  value={formState.commitment} onChange={handleInputChange} style={{width: "47px"}}>
                                    <option value="" disabled defaultValue hidden></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                               
                            </div>
                            <div className='col-10'>
                                <label htmlFor='commitmentFeedback'>Commitment Feedback:</label>
                                <textarea
                                className='col-12'
                                name='commitmentFeedback'
                                type='text'
                                value={formState.commitmentFeedback}
                                onChange={handleInputChange}
                                style={{minHeight: "150px"}}
                                ></textarea>
                            </div>

                            <div className='col-10'>
                                <label htmlFor="anticipation">Anticipation:</label>
                                <select id="anticipation" name="anticipation" value={formState.anticipation} onChange={handleInputChange} style={{width: "47px"}}>
                                    <option value="" disabled defaultValue hidden></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className='col-10'>
                                <label htmlFor='anticipationFeedback'>Anticipation Feedback:</label>
                                <textarea 
                                className='col-12'
                                name='anticipationFeedback'
                                type='text'
                                value={formState.anticipationFeedback}
                                onChange={handleInputChange}
                                style={{minHeight: "150px"}}
                                ></textarea>
                            </div>

                            <div className='col-10'>
                                <label htmlFor="clarity">Clarity:</label>
                                <select id="clarity" name="clarity" value={formState.clarity} onChange={handleInputChange} style={{width: "47px"}}>
                                    <option value="" disabled defaultValue hidden></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                
                            </div>
                            <div className='col-10'>
                                <label htmlFor='clarityFeedback'>Clarity Feedback:</label>
                                <textarea 
                                className='col-12'
                                name='clarityFeedback'
                                type='text'
                                value={formState.clarityFeedback}
                                onChange={handleInputChange}
                                style={{minHeight: "150px"}}
                                ></textarea>
                            </div>

                            <div className='col-10'>
                                <label htmlFor="everyCustomerMatters">Every Customer Matters:</label>
                                <select id="everyCustomerMatters" name="everyCustomerMatters" value={formState.everyCustomerMatters} onChange={handleInputChange} style={{width: "47px"}}>
                                    <option value="" disabled defaultValue hidden></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                
                            </div>
                            <div className='col-10'>
                                <label htmlFor='everyCustomerMattersFeedback'>Every Customer Matters Feedback:</label>
                                <textarea 
                                className='col-12'
                                name='everyCustomerMattersFeedback'
                                type='text'
                                value={formState.everyCustomerMattersFeedback}
                                style={{minHeight: "150px"}}
                                onChange={handleInputChange}
                                ></textarea>
                            </div>

                            <div className='col-10'>
                                <label htmlFor="finalScore">Final Score:</label>
                                <select id="finalScore" name="finalScore" value={formState.finalScore} onChange={handleInputChange} style={{width: "35px"}}>
                                    <option value="" disabled defaultValue hidden></option>
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