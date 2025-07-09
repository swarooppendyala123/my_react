import {useEffect, useState} from "react"

export default function ProgressBar ({timer}){
const [remainingTime, setRemainingTime] = useState(timer);
useEffect (() => {
    const interval = setInterval (() => {
      console.log('interval set'); 
      setRemainingTime  (prevTime => prevTime-10);
    }, 10)
    return () =>{
      clearTimeout(interval)
    }
  },[])

  return <progress value={remainingTime} max={timer} />
}