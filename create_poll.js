import React, { useState } from 'react';
import './create_poll.css';
import axios from 'axios'
const CreatePoll = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [starttime, setStartTime] = useState("");
  const [endtime, setEndTime] = useState("");
  const [voters, setVoters] = useState([{ votermail: "", voterid: "" }]);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([{ option: "", votes: 0 }]);
  const [emailErrors, setEmailErrors] =  useState([]);



  const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,})+$/;

  const handleAddingVoters = async (e, i) => {
    const votermail = e.target.value;
    const newVoters = [...voters];

    if (votermail !== "") {
      if (emailRegex.test(votermail)) {
        try {
          const response = await fetch('https://elect-server-opal.vercel.app/api/poll/generate', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          const voterid = data.id;

          setEmailErrors(emailErrors.filter(error => error.index !== i)); // Clear previous errors
          newVoters[i] = { votermail, voterid };
        } catch (error) {
          setError(error.message);
        }
      } else {
        setEmailErrors(emailErrors => [...emailErrors, { index: i, message: "Not a valid email" }]);
      }
    } else {
      setEmailErrors(emailErrors.filter(error => error.index !== i)); // Clear previous errors
    }

    setVoters(newVoters);
  };

  const handleRemovingVoterField = (e, i) => {
    const deleteVal = [...voters];
    if (deleteVal.length > 1) {
      deleteVal.splice(i, 1);
      setVoters(deleteVal);
    }
  };

  const handleAddingVoterField = () => {
    setVoters([...voters, { votermail:"", voterid: "" }]);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAddingOption = (e, i) => {
    const option = e.target.value;
    const votes = 0;
    const onchangeVal = [...options];

    if (option === "") {
      onchangeVal[i] = { option: "", votes: votes };
    } else if (!onchangeVal.some((obj) => obj.option === option)) {
      onchangeVal[i] = { option: option, votes: votes };
    }
    setOptions(onchangeVal);
  };

  const handleRemovingOptionField = (e, i) => {
    const deleteVal = [...options];
    if (deleteVal.length > 1) {
      deleteVal.splice(i, 1);
      setOptions(deleteVal);
    }
  };

  const handleAddingOptionField = () => {
    setOptions([...options, { option: "", votes: 0 }]);
  };



 

  return (
    <div className="container bg-light my-5">
      <div className="title text-center mb-3 pt-3">
        <h1>Create a Poll</h1>
      </div>

      <div className='d-flex justify-content-center'>
        <form className="p-3 w-50" >
          <div className="mb-3">
            {/* ... (rest of the form fields) */}
          </div>

          <div className="col mb-3">
            <label htmlFor="voter" className="form-label fw-bold">Add Voter </label>
            <button type="button" className="btn btn-sm btn-outline-dark m-3" onClick={handleAddingVoterField}> + </button>
            {voters.map((val, i) => (
              <div style={{ display: 'flex' }} key={i}>
                <input type="email" id="voter" className="form-control" placeholder='Enter Voter E-mail' value={val.votermail} onChange={(e) => handleAddingVoters(e, i)} required />
                <button type="button" className="btn btn-sm btn-outline-dark m-3" onClick={(e) => handleRemovingVoterField(e, i)}> - </button>
              </div>
            ))}
            {emailErrors.map(error => (
              <p key={error.index} className="text-danger">{error.message}</p>
            ))}
          </div>

          <div className="mb-3">
            <label htmlFor="questions" className="form-label fw-bold">Question </label>
            <input type="text" id="questions" className="form-control" placeholder='Questions' value={question} onChange={handleQuestionChange} required />
          </div>

          <div className="col mb-3">
            <label htmlFor="option" className="form-label fw-bold">Add Options </label>
            <button type="button" className="btn btn-sm btn-outline-dark m-3" onClick={handleAddingOptionField}> + </button>
            {options.map((val, i) => (
              <div style={{ display: 'flex' }} key={i}>
                <input type="text" id="option" className="form-control" placeholder='Add Option' value={val.option} onChange={(e) => handleAddingOption(e, i)} required />
                <button type="button" className="btn btn-sm btn-outline-dark m-3" onClick={(e) => handleRemovingOptionField(e, i)}> - </button>
              </div>
            ))}
          </div>

          <div className="mb-3 pt-2">
            <button type="submit" className="btn btn-lg btn-dark" disabled={loading}>
              {loading ? (
                <div className="loading-indicator"></div>
              ) : (
                'Continue'
              )}
            </button>
            {message && <p>{message}</p>}
          </div>
        </form>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default CreatePoll;
