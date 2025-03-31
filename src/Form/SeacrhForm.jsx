export default function SeacrhForm (){
    return(
        <form>
            <input type="text"></input>
            <button onClick={(e) =>{
                e.preventDefault()
                alert("You Seacrh")
            }}></button>
        </form>
    )
}