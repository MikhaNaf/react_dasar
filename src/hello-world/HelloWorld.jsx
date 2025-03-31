import './HelloWorld.css'

export default function HelloWorld(){
    const props ={
        text: "Hello World From Props"
    }
    return (
        <div>
            <HeaderHelloWorld {...props}/>
            <ParagraphHelloWorld/>
        </div>
    )
}

function HeaderHelloWorld({text="ups lupa kasih text"}){
    return (
        <h1 className='title'>{text.toUpperCase()}</h1>
    )
}

function ParagraphHelloWorld(){
    const text = "selamat Belajar React"
    
    return (
        <p className='content'>{text.toLowerCase()}</p>
    )
}