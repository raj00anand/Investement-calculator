import React from 'react'
import './InputCard.css'

type InputCardProps = {
    currentSavings: number | string
    yearlySavings: number | string
    expectedInterest: number | string
    investmentDuration: number | string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit: () => void;
    handleReset: () => void;
}   

const InputCard = ({currentSavings, yearlySavings, expectedInterest, investmentDuration, handleChange, handleSubmit, handleReset }: InputCardProps) => {
  return (
    <div className='card'>
        <div className='first-input'>
        <div>
            <p className='current-savings'>CURRENT SAVINGS</p>
            <input type="number" name="current-savings" id="" value={currentSavings} onChange={handleChange}/>
        </div>
        <div>
            <p className='yearly-savings'>YEARLY SAVINGS</p>
            <input type="number" name="yearly-savings" id="" value={yearlySavings} onChange={handleChange}/>
        </div>
        </div>
        <div>
        <div className='second-input'>
            <p className='expected-interest'>EXPECTED INTEREST(% PER YEAR)</p>
            <input type="number" name="expected-interest" id="" value={expectedInterest} onChange={handleChange}/>
        </div>
        <div className='investment'>
            <p className='investment-duration'>INVESTMENT DURATION (YEAR)</p>
            <input type="number" name="investment-duration" id="" value={investmentDuration} onChange={handleChange}/>
        </div>
        <div className='buttons'>
            <button type="submit" className='reset' onClick={handleReset}>reset</button>
            <button type="submit" className='calculate' onClick={handleSubmit}>calculate</button>
        </div>
        </div>
      
    </div>
  )
}

export default InputCard
