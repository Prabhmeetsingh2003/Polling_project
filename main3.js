// Main3.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Main3 = () => {
  const { title, option1, option2, option3, option4 } = useParams();

  const [pollDataState, setPollDataState] = useState({
    title: decodeURIComponent(title),
    options: [decodeURIComponent(option1), decodeURIComponent(option2), decodeURIComponent(option3), decodeURIComponent(option4)],
  });

  const [votes, setVotes] = useState(Array(pollDataState.options.length).fill(0));
  const [percentages, setPercentages] = useState(() => {
     
    const storedPercentages = JSON.parse(localStorage.getItem('percentages')) || Array(pollDataState.options.length).fill(0);
    return storedPercentages;
  });

  useEffect(() => {
 
    setPollDataState({
      title: decodeURIComponent(title),
      options: [decodeURIComponent(option1), decodeURIComponent(option2), decodeURIComponent(option3), decodeURIComponent(option4)],
    });
  }, [title, option1, option2, option3, option4]);

  const handleVote = (optionIndex) => {
   
    const newVotes = [...votes];
    newVotes[optionIndex] += 1;
    setVotes(newVotes);

   
    const totalVotes = newVotes.reduce((total, vote) => total + vote, 0);
    const newPercentages = newVotes.map((vote) => ((vote / totalVotes) * 100).toFixed(2));
    setPercentages(newPercentages);

 
    localStorage.setItem('percentages', JSON.stringify(newPercentages));
  };

  return (
    <div className="App">
      <header className="header">
        <a href="#" className="logo">
          Poll maker
        </a>
        <nav className="nav-items">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <div className="app-intro">
        <h1 className="app-tag">Voting Details</h1>
        <div className="voting-container">
          <h2 className="heading_main3">{pollDataState.title}</h2>
          {pollDataState.options.map((option, index) => (
            <React.Fragment key={index}>
              <button className="options_main3" onClick={() => handleVote(index)}>
                {option}
              </button>
              <br />
            </React.Fragment>
          ))}

          {percentages.map((percentage, index) => (
            <p key={index} className="text_main3">
              Percentage of voters of option {index + 1}: {percentage}%
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main3;
