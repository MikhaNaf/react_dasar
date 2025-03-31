import { useState } from "react";
 
export default function Counter(){
    let [counter, setCounter] = useState(0)
    console.info("Rendering Counter")

    function handleClick(){
        setCounter (counter + 3)
        console.log(counter)
    }   
    
    return(
        <div>
                <div>
                    <button onClick={handleClick}>Increment</button>
                </div>
                <h1>Counter : {counter}</h1>
        </div>
    )
}