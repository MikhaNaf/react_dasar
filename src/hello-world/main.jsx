import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./container";
import Todo from "../todolist/Todo";
import TodoList from "../todolist/TodoList";
import Table from "../table/Table";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import ToolBar from "../button/ToolBar";
import SeacrhForm from "../Form/SeacrhForm";
import SayHelloForm from "../Form/SayHelloForm";
import Counter from "../Form/Counter";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld/>
                <TodoList/>
                <Table/>
                <AlertButton text = "Click Me" massage = "You CLick Me"/>
                <MyButton text = "You Clickme" onSmash={()=> alert("You Smash Me")}/>
                <ToolBar onClick={(e) => {
                    e.stopPropagation()
                    alert("You Click ToolBar")
                }}/>
                <SeacrhForm/>
                <SayHelloForm/>
                <Counter/>
                <Counter/>

            </Container>
        </StrictMode>
    )