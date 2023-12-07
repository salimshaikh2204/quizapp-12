
import React from 'react';
import {useState} from 'react';

const myQuestions =[
  {
    title:'What is the use of useState()',
    A:'To store the data',
    B:'To NOT store the data',
    C:'BOTH A & B',
    D:'NONE OF THESE',
    Ans:'A'
  },
  {
    title:'What is 10+50',
    A:'120',
    B:'80',
    C:'70',
    D:'60',
    Ans:'D'
  },
  {
    title:'What is the REACT',
    A:'IT IS A LIBRARY',
    B:'IT IS A FRAMEWORK',
    C:'BOTH A & B',
    D:'NONE OF THESE',
    Ans:'A'
  }
]



export function Question(){
  const[currentQuestion,setcurrentQuestion] =useState(0)


  return(
    <div style={{marginTop:'300px',marginLeft:'200px'}}>
      <div>
        <h3>Q:{myQuestions[currentQuestion].title}</h3>

        <div style={{display:'flex',alignItems:'center'}}>
          <span>A:</span>
          <button className='btn btn-success'>{myQuestions[currentQuestion].A}</button> </div>
        <div style={{display:'flex',alignItems:'center'}}>
          <span>B:</span>
          <button className='btn btn-success'>{myQuestions[currentQuestion].B}</button> </div>
        <div style={{display:'flex',alignItems:'center'}}>
          <span>C:</span>
          <button className='btn btn-success'>{myQuestions[currentQuestion].C}</button> </div>
        <div style={{display:'flex',alignItems:'center'}}>
          <span>D:</span>
          <button className='btn btn-success'>{myQuestions[currentQuestion].D}</button> </div>
        </div>

    </div>
  )
}

