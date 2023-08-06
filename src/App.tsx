import React, { useState } from 'react';
 import './App.css';
 import InputCard from './components/InputCard';
 import Table from './components/Table';
 import logo from './assets/images/investment-calculator-logo.png'

 type siArrayProps = {
  year: number
  currentSavings: number
  si: number
  totalInterest: number
  investedCapital: number
}

function App() {
  let[currentSavings, setCurentSavings] = useState<number | string>('');
  let[yearlySavings, setYearlySavings] = useState<number | string>('');
  let[expectedInterest, setExpectedInterest] = useState<number | string>('');
  let[investmentDuration, setInvestementDuration] = useState<number | string>('');
  const[data, setData] = useState<siArrayProps[]>([]);
  
  
  const siArray: siArrayProps[] = [];

  const handleChage = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const tar = event.target.name;
    const val = event.target.value;
    const parsedval = parseFloat(val);
    if(tar === 'current-savings'){
      setCurentSavings(parsedval)
      console.log(parsedval)
      
    }else if(tar === 'yearly-savings'){
      setYearlySavings(parsedval)
    }else if(tar === 'expected-interest'){
      setExpectedInterest(parsedval)
    }else{
      setInvestementDuration(parsedval)
    }
    
  }

  // let result : siArrayProps[]= [];

  const handleSubmit = () => {
    currentSavings = +currentSavings;
    expectedInterest = +expectedInterest;
    investmentDuration = +investmentDuration;
    yearlySavings = +yearlySavings;
    let totalInterest = 0;
    for(let i:number = 0;i<investmentDuration;i++){
      const si: number = +((currentSavings* expectedInterest )/100).toFixed(2);
      totalInterest += si;
      totalInterest = +totalInterest.toFixed(2);
      const investedCapital = +((currentSavings + yearlySavings).toFixed(2));
      currentSavings += (si+yearlySavings);
      currentSavings = +currentSavings.toFixed(2);
      const year = i+1;
      // currentSavings
      siArray.push({year, currentSavings, si, totalInterest, investedCapital});
      
    }
    // if(siArray.length > 1){
    //   setDisplay(true);
    // }
    // result = [...siArray];
    setData([...siArray])
    console.log(siArray[0].year);
    console.log(siArray)
  }
  const handleReset = () => {
    setCurentSavings('');
    setYearlySavings('');
    setExpectedInterest('');
    setInvestementDuration('');
    setData([]);
    // setDisplay(false)
  }
  return (
    <div className="App">
      <div>
        <img src={logo} alt="image" className='logo'/>
        <h2>Investment Calculator</h2>
      </div>
      <div>
        <InputCard 
        currentSavings={currentSavings}
        yearlySavings={yearlySavings}
        expectedInterest={expectedInterest}
        investmentDuration={investmentDuration}
        handleChange={handleChage}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        />
      </div>
      <div>
        {/* {display ? <Table data={result}/> : <p>No investment calculated yet.</p>} */}
        <Table data={data} />

      </div>
    </div>
  );
}

export default App;
