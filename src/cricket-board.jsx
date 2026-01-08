import { useState } from "react"

export default function CricketBoard(){
    const [run,setrun] = useState(0);
    const [wicket,setwicket] = useState(0);
    
    const handleSingleRun = () =>{
        const newRun = run+1;
        setrun(newRun);
    }
    const handleDoubleRun = () =>{
        const newRun = run+2;
        setrun(newRun);
    }
    const handleFour = () =>{
        const newRun = run+4;
        setrun(newRun);
    }
    const handleSix = () =>{
        const newRun = run + 6;
        setrun(newRun);
    }
    function handleWicket(){
        const newWicket = wicket+1;
        setwicket(newWicket);
    }
    function handleTripple(){
        const updateTripple = run+3;
        setrun(updateTripple);
    }
    return(
        <div className="fle">
            <h1>Cricket Board</h1>
            <h2>Total Run: {run} / {wicket} </h2>
            <button onClick={handleSingleRun}>Single</button>
            <button onClick={handleDoubleRun}>Double</button>
            <button onClick={handleTripple}>Tripple</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
            <button onClick={handleSingleRun}>No Ball</button>
            <button onClick={handleSingleRun}>Wide Ball</button>
            <button onClick={handleWicket}>Wicket</button>

        </div>
    )
}