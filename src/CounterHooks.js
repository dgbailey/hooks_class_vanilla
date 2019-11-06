import React, {useState,useEffect} from 'react';

export function CounterHooks (){

   let [counter,setCounter] = useState(0);
   let [counterStatus,setCounterStatus] = useState(true);
   let myInterval;

    useEffect(() =>{
       initiateInterval();
       return () =>{
           clearInterval(myInterval)
       }
    },[counter])

    let initiateInterval = () => {
        myInterval = setInterval(() => setCounter(++counter),1000);
    }

    const toggleInterval = () => {
        if(counterStatus){
            setCounterStatus(false);
            clearInterval(myInterval)
        }
        else{
            setCounterStatus(true);
            initiateInterval();

        }
    }


    return (

        <div className='counter-container'>
                <div className='counter-visualization'>{counter}</div>
                <button className='start-btn' onClick={toggleInterval}>{counterStatus ? 'Stop':'Start'}</button>
                

        </div>


    )




}