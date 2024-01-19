import React, {useState} from "react";

export const TotoForm = () =>{
    const [value, setValue] = useState("")

    // preventing the site to be refreshed after corrections
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(value)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="what is the task today" onChange={(e) => setValue(e.target.value)}/> 
            <button>Add Task</button>
        </form>
        </>
    )
}