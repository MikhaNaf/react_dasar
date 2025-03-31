export default function AlertButton ({text,massage}){
    function handleClick(e){
        console.info(e)
        alert(massage)
    }
    return (
        <button onClick ={handleClick}>{text}</button>
    )
}