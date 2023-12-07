

import React from 'react';

import {useContext} from 'react';

import {myBasket} from '../App';


export function Homepage(){

  const { setData } = useContext(myBasket)


  function handleClick(){
    //to naviage to question

    setData('question')
  }

  return(
    <div>
      <button className="btn btn-primary" onClick={handleClick}>Start Quiz</button>

    </div>
  )
}

