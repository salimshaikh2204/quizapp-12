import React from 'react';
import './App.css';
import {useState,createContext} from 'react';
import {Homepage} from './components/Homepage';
import {Question} from './components/Question';
import {Result} from './components/Result';



export const myBasket = createContext()




export default function App() {

  const[currentData,setcurrentData] = useState('homepage')
  


  return (
    <div>
      <myBasket.Provider value={ {setData: setcurrentData } }>
      {currentData =='homepage'&&<Homepage/>}
      </myBasket.Provider>
      
      {currentData =='question'&&<Question/>}
      {currentData =='result'&&<Result/>}
    </div>
  );
}
