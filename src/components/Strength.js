import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Strength(props) {
  let inputValue = props.inputValue;
  var zxcvbn = require("zxcvbn");
  const [strength,setStrength] = useState(0);
  console.log("Input",inputValue);
  console.log("strength",strength);

//   const strengthCalculator = () => {
//     if(inputValue === '') setStrength(0);
//     if(inputValue !== inputValue.toLowerCase() && upper) { // for uppercase
//         setStrength(prev =>  prev + 1);
//         this.upper = true;
//     }
//     if(inputValue !== inputValue.toUpperCase() && lower) { // for lowercase
//         setStrength(prev =>  prev + 1);
//         lower = true;
//     }
//     console.log("upper", upper);
//   };

  const testStrengthPassword = () => {
    // we will get score property from zxcvbn
    if (inputValue !== "") {
      let pass = zxcvbn(inputValue)
      setStrength(pass.score)
    }else{
      setStrength(0);
    }
  }

  useEffect(() => {
    testStrengthPassword();
    console.log("strengthhhh",strength);
  },[inputValue])

  return (
    <div>
    <h3 style={{marginLeft: "50px", marginTop: "20px"}}>Strength</h3>
    <div style={{width: "200px"}}>
      {strength === 0 ? 
      <>
      <ProgressBar striped variant="danger" now={0} />
      </>:
      (strength === 1 
        ? 
        <>
        <ProgressBar striped variant="danger" now={30} />
          <p style={{color: "red"}}>Weak</p>  
        </>
        : (strength === 2 ? 
            <>
        <ProgressBar striped variant="warning" now={60} />
          <p style={{color: "orange"}}>Moderate</p>  
        </> : 
        <>
        <ProgressBar striped variant="success" now={100} />
          <p style={{color: "green"}}>Strong</p>  
        </>))
      }
    </div>
    </div>
  )
}

export default Strength;
