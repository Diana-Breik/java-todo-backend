import './App.css'

import TodoCard from "./TodoCard.tsx";
import {Todo} from "./Todo.ts";
import {Link} from "react-router-dom";

type TodosGalleryProps={
    todos: Todo[],
    deleteToDoCallBackMethod : (id : string)=> void,
    editToDoCallbackMethod : (todoAfterEdit : Todo) => void
}
export default function TodosGallery(props: TodosGalleryProps){


       // const listWithDONEStatus= props.todos.filter((todo) => todo.status === "DONE")

        const handleDeleteToDo = (id : string)=>{

            props.deleteToDoCallBackMethod(id)

        }
      /* listWithDONEStatus.forEach((todo) => {
        console.log("new list", todo);
       });*/

    const handleEditToDo = (todoAfterEdit:Todo)=>{

        props.editToDoCallbackMethod(todoAfterEdit)

    }

    return(
        <div className={"TodoFile"}>
           <h3>todo-list</h3>
            {props.todos.map(todo => <TodoCard
                key={todo.id}
                todo={todo}
                handleDeleteToDoMethod ={handleDeleteToDo}
                handleEditToDoMethod = {handleEditToDo}
            />)}


            <Link to={"/add"}>
                <button >Neue Aufgabe hinzufügen</button>
            </Link>

        </div>
    )
}