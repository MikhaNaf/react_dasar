import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useReducer } from "react";
import { NotesContext, NotesDispatchContext } from "./NotesContext";


let id = 0 
const intialNotes = [
    {id: id++, text: "Larn HTML", done:false},
    {id: id++, text: "Larn CSS", done:true},
    {id: id++, text: "Larn JavaScript", done:false},
    {id: id++, text: "Larn ReactJS", done:false}
]
function notesReducer(notes, action){
    switch (action.type){
        case "ADD_NOTE" :
            return [
                ...notes,
                {
                    id: id++,
                    text: action.text,
                    done: false
                }
            ]
            case "CHANGE_NOTE" :
                return notes.map(note =>
                    note.id === action.id ? {...note, text: action.text, done: action.done} : note
                )
            case "DELATE_NOTE" :
                return notes.filter(note => note.id !== action.id)
    }
}

export default function NoteApp(){
    const [notes, dispatch] = useReducer(notesReducer, intialNotes)

    return(
        <div>
            
            <NotesContext.Provider value={notes}>
                <NotesDispatchContext value={dispatch}>
                <h1>Note App</h1>
                <NoteForm/>
                <NoteList/>
                </NotesDispatchContext>
            </NotesContext.Provider>

        </div>
    )
}