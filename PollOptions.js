// PollOptions.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Main3 from './main3';

const PollOptions = ({ poll, onDelete }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const handleDelete = () => {
    onDelete(poll.title);
  };

  return (
    <div className="app-poll-box">
      <p><b>{poll.title + "     "}</b> <button className="delete-icon" onClick={handleDelete}>
        &#10006;
      </button></p>

      <p>{`Number of Options: ${poll.numOptions}`}</p>
      <ul>
        {poll.optionNames.map((option, index) => (
          <li key={index}>
            <button
              onClick={() => handleOptionSelect(index)}
              className={index === selectedOption ? 'selected' : ''}
            >
              {`Option ${index + 1}: ${option}`}
            </button>
          </li>
        ))}
      </ul>

      {/* Add "View Result" button with a link to the result page */}
      <Link to={`/main3/${poll.title}`}>
        <button className="view-result-button">
          Click to Vote
        </button>
      </Link>
    </div>
  );
};

export default PollOptions;
