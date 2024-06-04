import './App.css';
import React,{useState} from 'react';
import LearnProps from './PropsState/LearnProps';
import InputBox from './PropsState/InputBox';
import CondOperator from './op/CondOperator';
import AndOperator from './op/AndOperator';
// import Login from './Auth/Login';
// import RegisterPage from './Auth/Signup';
import NavTab from './example/NavTab';
// import Sample from './example/Sample';
// import Ex1 from './example/ex1';

function App() {
  const [first, setfirst] = useState();
  const [second, setsecond] = useState();

  const handleChange=(e)=>{
    setfirst(e.target.value);

  }
 console.log(first);
 const handleAdd=(e)=>{
  e.preventDefault();
  setsecond(first);
 }
 console.log( "newvalue",first);

  return (
    <div className="App">
      <LearnProps first={second}/>
      <input type="text" onChange={handleChange}/>  
      <InputBox handleAdd={handleAdd}/>
      <CondOperator/>
      <AndOperator/>
      {/* <Login/> */}
      {/* <RegisterPage/> */}
      {/* <NavTab/> */}
      {/* <Sample/> */}
    </div>
  );
}

export default App;
