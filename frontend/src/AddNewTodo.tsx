import {ChangeEvent, FormEvent, useState} from "react";
import {Status, Todo} from "./Todo.ts";
import {Link} from "react-router-dom";



type AddNewTodoProps = {
    addTodoCallBackMethod : (newTodo : Todo)=> void
}

export default function AddNewTodo(props:AddNewTodoProps){
    const [description, setDescription]= useState<string>("")
    const [status, setStatus]= useState<Status>("OPEN")

    function onDescriptionChange(event: ChangeEvent<HTMLInputElement>){
        setDescription(event.target.value)
    }
    function onStatusChange(event:ChangeEvent<HTMLInputElement>){
        setStatus(event.target.value as Status)
    }
    function onTodoSave(event:FormEvent<HTMLFormElement>){

        event.preventDefault()


        const newTodo:Todo ={
            id:"0",
            description:description,
            status:status
        }
        props.addTodoCallBackMethod(newTodo)

        setDescription("")
        setStatus("OPEN")

    }
    return(
        <>
            <h3>
               add a new Todo
            </h3>
            <form onSubmit={onTodoSave}>
                <input value={description} onChange={onDescriptionChange}/>
                <br/>
                <input value={status} onChange={onStatusChange}/>
                <br/><br/>
                <button type={"submit"}>Save</button>
            </form>
            <Link to={"/"}>
            <button >Zurück zur Startseite</button>
            </Link>
        </>
    )
}