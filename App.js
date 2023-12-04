 // src/App.js
 import React from 'react';
 import Main from './main';
 import Main1 from './main1';
 import Main2 from './main2';
 import Main3 from './main3';
 import Main4 from './main4';
 import LoginPage from './login-page';
 import Register from './Register';
 import {BrowserRouter,Route,Routes} from "react-router-dom";
 import Create_poll from './create_poll';
 // import Mainpageviva from './mainpage_viva';
 function App() {
   // return (
   //   <div className="App">
   //     {/* <Main /> */}
   //     {/* <LoginPage/> */}
   //     {/* <Register/> */}
     
       
   //   </div>
   // );
   return <BrowserRouter>
   <Routes>
     <Route path="/" element={<Main/>} />
     <Route path="main1" element={<Main1/>} />
     <Route path="main2" element={<Main2/>} />
     <Route path="/main3/:title/:option1/:option2/:option3/:option4" element={<Main3 />} />
     <Route path="main4" element={<Main4/>} />
   </Routes>
   </BrowserRouter>
 }
 
 // export default App;
 
  // App.js
  // App.js
 // import React, { useState } from 'react';
 // import TaskForm from './mainpage_viva'; // Assuming TaskForm is in the same directory
 
 // const App = () => {
 //   const [tasks, setTasks] = useState([]);
 
 //   const addTask = (newTask) => {
 //     setTasks([...tasks, newTask]);
 //     console.log('New Task:', newTask);
 //   };
 
 //   const markTaskAsCompleted = (index) => {
 //     // Implement the logic to mark the task as completed
 //     // For example, you can update the task's status or remove it from the list
 //     // For simplicity, I'll just log the task index as completed here
 //     console.log('Task Completed:', index);
 //   };
 
 //   return (
 //     <div>
 //       <h1>Task List</h1>
 //       <TaskForm addTask={addTask} tasks={tasks} markTaskAsCompleted={markTaskAsCompleted} />
 //       <ul>
 //         {tasks.map((task, index) => (
 //           <li key={index}>{task.description}</li>
 //         ))}
 //       </ul>
 //     </div>
 //   );
 // };
 
 export default App;
 