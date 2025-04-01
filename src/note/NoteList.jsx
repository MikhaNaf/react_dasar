import Note from "./Note"
export default function NoteList({notes, onChange, onDelate}){
    return(
        <ul>
            {notes.map(note => (
                <li key={note.id}>
                    <Note note={note} onChange={onChange} onDelate={onDelate}/>
                </li>
            ))}
        </ul>
    )
}