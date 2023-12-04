import React, { useState, useEffect } from 'react';
import './main3.css';
import votingData from './votingData.json';

const Main4 = () => {
  const [pollDataState, setPollDataState] = useState({ title: '', options: [] });
  const [votes, setVotes] = useState(Array(votingData.options.length).fill(0));
  const [percentages, setPercentages] = useState(Array(votingData.options.length).fill(0));

  useEffect(() => {
    const fetchData = async () => {
      try {
        setPollDataState(votingData);
      } catch (error) {
        console.error('Error fetching voting data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  const handleVote = (optionIndex) => {
    // Increment the vote count for the selected option
    const newVotes = [...votes];
    newVotes[optionIndex] += 1;
    setVotes(newVotes);

    // Calculate and update the percentages
    const totalVotes = newVotes.reduce((total, vote) => total + vote, 0);
    const newPercentages = newVotes.map((vote) => ((vote / totalVotes) * 100).toFixed(2));
    setPercentages(newPercentages);
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
        <h1 className="app-tag">Title</h1>
        <div className="voting-container">
          <h2 className="heading_main3" >{pollDataState.title}</h2>
          {pollDataState.options.map((option, index) => (
            <React.Fragment key={index}>
              <button className="options_main3" onClick={() => handleVote(index)}>{option}</button>
              <br />
            </React.Fragment>
          ))}

          <p className="text_main3">Percentage of voters of option 1: {percentages[0]}%</p>
          <p className="text_main3">Percentage of voters of option 2: {percentages[1]}%</p>
          <p className="text_main3">Percentage of voters of option 3: {percentages[2]}%</p>
          <p className="text_main3">Percentage of voters of option 4: {percentages[3]}%</p>
        </div>
      </div>
    </div>
  );
};

export default Main4;