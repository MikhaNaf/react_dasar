export default function Todo({text, isComplated, isDelated = false}){
    if (isDelated) {
        return null
    } else {
        return (
            <li>
                {text} {isComplated && 'V'}
            </li>
        )
    }
    
}