import { useImperativeHandle, useRef } from "react";

export default function ResultModal({ref, remainingTime, targetTime, onReset}){
    const dialog =  useRef();
    const userLost = remainingTime <= 0 ;
    const formatedRemTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime*1000)) * 100 );
    useImperativeHandle(ref, ()=>{
        return{
            open (){
                dialog.current.showModal();
            }
        }
    })
    return(
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>You Lost !</h2>}
            {!userLost && <h2>Your Score: {score}</h2> }
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stopped the timer with <strong>{formatedRemTime} seconds left.</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    );
}