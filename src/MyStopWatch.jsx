// import React, { useEffect, useState } from "react";

// function Mystopwatch(){

//     const [time, setTime ] =useState("0:00");
//     const [start,setStart] = useState(false );

//     const formattime = (seconds) => {
//         const mins = Math.floor(seconds/60).toString().padStart(2,"0")
//         const secs = (seconds%60).toString().padStart(2,"0")
//         return `${mins}:${secs}`
//     }


//     const handleStart = ()=>{
//         setStart((prev)=>!prev) // toggling true or false 

//     }
//      const handleReset = ()=>{
//         setTime("0:00")
//         setStart(false) //stops the timer running 
    

//      }

//     useEffect(()=>{
//         let interval;
//     if (start) {
//         interval = setInterval(() => {
//             setTime(prevTime => {
//                 const newTime = prevTime.split(":");
//                 const mins = parseInt(newTime[0]);
//                 const secs = parseInt(newTime[1]);

//                 const totalSeconds = mins * 60 + secs + 1;
//                 return formattime(totalSeconds);
//             });
//         }, 1000);
//             }else{
//                 clearTimeout(interval)//clear the time 
//             }
        

//         return ()=>
//             clearInterval(interval);
        

//     },[start])

//     return(
        
//         <div style={{display:"flex", justifyContent:"center" ,alignItems:"center" ,height:"400px" }} >
//             <div style={{display:"flex", flexDirection:"column", justifyContent:"center" ,alignItems:"center", 
//             height:"300px", width:"600px" ,border:"2px solid black"
//             }}>
//             <h1>Stopwatch</h1>
//             <h2>Time: {time}</h2>

//             <div>
//             <button onClick={handleStart} style={{height:"50px" ,width:"100px",margin:"10px"}}>
//                 {
//                     start ? <h2> stop </h2> : <h2>Start </h2>
//                 }

//             </button>

//             <button  onClick={handleReset} style={{height:"50px" ,width:"100px",margin:"10px"}}><h2>Reset </h2>

//             </button>
//             </div>
           
//             </div>
            
           
            


//         </div>
        
//     )

// }
// export default Mystopwatch;


 /////

 import React, { useEffect, useState } from "react";

function Mystopwatch() {
    const [time, setTime] = useState("0:00");
    const [start, setStart] = useState(false);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
        const secs = (seconds % 60).toString().padStart(2, "0");
        return `${mins}:${secs}`;
    };

    const handleStart = () => {
        setStart((prev) => !prev);
    };

    const handleReset = () => {
        setTime("0:00");
        setStart(false);
    };

    useEffect(() => {
        let intervalId;

        if (start) {
            intervalId = setInterval(() => {
                setTime((prevTime) => {
                    const newTime = prevTime.split(":");
                    const mins = parseInt(newTime[0]);
                    const secs = parseInt(newTime[1]);

                    const totalSeconds = mins * 60 + secs + 1;
                    return formatTime(totalSeconds);
                });
            }, 1000);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [start]);

    return (
        <div>
            <h1>Stopwatch</h1>
            <h2>Time: {time}</h2>
            <div>
                <button onClick={handleStart}>{start ? "Stop" : "Start"}</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}

export default Mystopwatch;
