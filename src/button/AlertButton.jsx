import { useRef } from "react"

export default function AlertButton ({text,massage}){
    const counter = useRef(0)
    function handleClick(e){
        console.info(e)
        alert(`${massage} ${counter.current++}`)
    }
    return (
        <button onClick ={handleClick}>{text}</button>
    )
}