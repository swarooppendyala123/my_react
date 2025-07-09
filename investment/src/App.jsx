import { useState } from "react";

import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx"
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration :10
  });
const isValid = userInput.duration >= 1;
function handleChange(inputIdentifier, newValue){
    setUserInput (prevUserInput =>{
        return {
            ...prevUserInput,
            [inputIdentifier] : +newValue
        };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {isValid ? (<Results  input ={userInput}/>) : <p className="center">Please enter a valid Input</p> }
    </>
    
  )
}

export default App
