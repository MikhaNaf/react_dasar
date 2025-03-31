import Todo from "./Todo.jsx"
export default function TodoList (){
    const data = [
        {
            id : 1,
            text : "Learn Html",
            isComplated :true
        },
        {
            id : 2,
            text : "Learn CSS",
            isComplated :true
        },
        {
            id : 3,
            text : "Learn JavaScipt",
            isComplated :true
        },
        {
            id : 4,
            text : "Learn ReactJS",
            isComplated :false
        },
        {
            id : 5,
            text : "Learn ReactJS",
            isComplated :false
        }
        
    ]

    
    return (
        <ul>
            {data.map((todo) => (
                <Todo key={Todo.id} {...todo}/>
            ))}
        </ul>
    )
}