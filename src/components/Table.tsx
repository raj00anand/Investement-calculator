import React from 'react'
import './Table.css'

type TableProps =  {
    data: {
        year: number
        currentSavings: number
        si: number
        totalInterest: number
        investedCapital: number
    }[]
}

const Table = ({ data}: TableProps) => {
  return (
    <div>
        {data.length === 0 ? <h4>No investment calculated yet.</h4>:
        <table style={{marginLeft: 'auto', marginRight: 'auto'}}>
        <tbody>
        <tr className='heading'>
            <td>Year</td>
            <td>Total Savings</td>
            <td>Interest (Year)</td>
            <td>Total Interest</td>
            <td>Inversted Capital</td>
        </tr>
        </tbody>
        <tbody>
        {data.map((val, index)=>{
            return <tr key={index}>
                <td>{val.year}</td>
                <td>{val.currentSavings}</td>
                <td>{val.si}</td>
                <td>{val.totalInterest}</td>
                <td>{val.investedCapital}</td>
            </tr>
        })}
        </tbody>
    </table>}
      
    </div>
  )
}

export default Table
