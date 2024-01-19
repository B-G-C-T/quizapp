import React, {useState} from "react";
import { TotoForm } from "./TodoForm";

export const TodoWrapper = () =>{
    const [todos, setTodos] = useState([""])
    // passing values from todoforms to todowrapper with props
    return(
        <>
        <TotoForm/>
        </>
    )
}