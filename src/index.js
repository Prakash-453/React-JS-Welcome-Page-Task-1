import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Sample from './Class1'
import Timetable from './TimeTable';
// import Home from './Home/Home';
// import Main from './Class3'
// import Main from './Class4'
// import Mainn from './Portfolio/PortfolioMain';
// import BasicExample from './BootStrap/Class7'
// import CondRend from './CondRend/CondRend';


// Day-7
// import Parent from './Day-7/Parent/Parent';
// import Counter from './Day-7/Counter/Counter';

// Day-8
// import ToggleSwitch from './Day-8/ToggleSwitch/ToggleSwitch';
// import Form from './Day-8/SampleForm/Form';

// Day-9
// import SampleForm from './Day-9/SampleForm/SampleForm';

// Day-10
// import ToDo from './Day-10/ToDoList/Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Sample/> */}
    <Timetable/>
    {/* <Home/> */}
    {/* <Mainn/> */}
    {/* <BasicExample/> */}
    {/* <CondRend/> */}
    {/* <Parent/> */}

    {/* <Parent Login="Admin"/> */}
    {/* <Counter/> */}

    {/* <ToggleSwitch/> */}
    {/* <Form/> */}

    {/* <SampleForm/> */}

    {/* <ToDo/> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
