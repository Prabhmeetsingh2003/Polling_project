 
// import React, { useEffect, useState } from 'react';
// import './main2.css';
// import PollOptions from './PollOptions';
// import pollsData from './pollsData.json';
// import axios from 'axios'
// const Main2 = () => {
//   const [polls, setPolls] = useState([]);

//   useEffect(() => {
//     setPolls(pollsData);
//   }, []);

//   const handleDeletePoll = (pollTitle) => {
//     const updatedPolls = polls.filter((poll) => poll.title !== pollTitle);
//     setPolls(updatedPolls);

//   };
// const [students, setStudents] = useState([]);
//  useEffect(() => {
       
// 		async function fetchData() {
// 			try {
// 				const response = await axios.get('http://localhost:3001/getusers');

// 				// const response =await instance({
// 				//   method:'get',
// 				//   url:"/getUsers/"
// 				// })
// 				setStudents(response.data);

// 			} catch (err) {
// 				console.error(err);
				
// 			}
// 		}

// 		fetchData();
// 	}, []);
//   return (
//     <div className="App">
//       <header className="header">
//         <a href="#" className="logo">Poll maker</a>
//         <nav className="nav-items">
//           <a href="#">Home</a>
//           <a href="#">About</a>
//           <a href="#">Contact</a>
//         </nav>
//       </header>

//       <div className="app-intro">
//         <h1 className="app-tag">Your created polls will be displayed here</h1>
//         <div className='app-box-sizing'>
//           <div className='app-order'>
            
            
//             {students.map((student) => (
//               <>
//               <div className='poll-css'> 
//               <div  >
//               <h3> Title : {student.title}</h3> </div>
             
//              <div> <p> No of options :{student.stage}</p></div>
          
//              <div> <p> options  :{student.option1}</p></div>
//              <div> <p> options  :{student.option2}</p></div>
//              <div> <p> options  :{student.option3}</p></div>
//              <div> <p> options  :{student.option4}</p></div>
//               <a href='main3'>View more</a>
//              </div>
//               </>
//             ))}
              
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main2;/


 
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './main2.css';

const Main2 = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3001/getusers');
        setStudents(response.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <Link to="/" className="logo">
          Poll maker
        </Link>
        <nav className="nav-items">
          <Link to="/main2">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <div className="app-intro">
        <h1 className="app-tag">Your created polls will be displayed here</h1>
        <div className="app-box-sizing">
          <div className="app-order">
            {students.map((student) => (
              <div className="poll-css" key={student.id}>
                <div>
                  <h3>Title: {student.title}</h3>
                </div>
                <div>
                  <p>Options: {student.option1}</p>
                </div>
                <div>
                  <p>Options: {student.option2}</p>
                </div>
                <div>
                  <p>Options: {student.option3}</p>
                </div>
                <div>
                  <p>Options: {student.option4}</p>
                </div>
                <Link
                 
                 className='link_main2'
                  to={`/main3/${encodeURIComponent(student.title)}/${encodeURIComponent(student.option1)}/${encodeURIComponent(
                    student.option2
                  )}/${encodeURIComponent(student.option3)}/${encodeURIComponent(student.option4)}`}
                >
                  View more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main2;
