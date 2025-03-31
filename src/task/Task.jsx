import TaskForm from "./TaskForm"
import TaskList from "./TaskList"
import { useImmer } from "use-immer"

export default function Task(){
    const [items,setItems] = useImmer ([])    
    return(
        <div>
           <TaskForm setItems={setItems}/>
           <TaskList items ={items}/>
        </div>
    )
}