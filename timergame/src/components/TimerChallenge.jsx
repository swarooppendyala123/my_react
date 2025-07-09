import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge ({title,  targetTime}){
    const timer = useRef();
    const dialog = useRef();
    const [timeRem, setTimeRem] = useState(targetTime * 1000);
    const isTimeActive = timeRem > 0 && timeRem < (targetTime*1000);
    if(timeRem <=0 ){
        clearInterval(timer.current);
        dialog.current.open();
    }
    function handleReset(){
        setTimeRem(targetTime*1000);
    }
    function handleStart(){
        timer.current = setInterval(()=>{
            setTimeRem(prevTimeRem => prevTimeRem-10);
        }, 10);
        setTimetstarted(true)
    }
    function handleStop(){
        dialog.current.open();
        clearInterval(timer.current);
    }
    return(
        <>
            <ResultModal ref={dialog} remainingTime = {timeRem} targetTime={targetTime} onReset= {handleReset}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime>1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={isTimeActive ? handleStop :handleStart}>
                        {isTimeActive ? 'Stop' : 'Start' } Challenge!
                    </button>
                </p>
                <p className={isTimeActive ? "active" : undefined}>
                    {isTimeActive ? 'Time is running...' : 'Time is inactive'}
               </p>
            </section>
        </>
        
    );
}