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

    const openTodos = props.todos.filter((todo) => todo.status === 'OPEN');
    const inProgressTodos = props.todos.filter((todo) => todo.status === 'IN_PROGRESS');
    const doneTodos = props.todos.filter((todo) => todo.status === 'DONE');

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
        <div className={"todos-gallery"}>
            <div className="column">
                <h2>Offen</h2>
                <Link to={"/add"}>
                    <button  className={"button"}>Neue Aufgabe hinzufügen</button>
                </Link>
                {openTodos.map((todo) => (
                    <TodoCard
                        key={todo.id}
                        todo={todo}
                        handleDeleteToDoMethod ={handleDeleteToDo}
                        handleEditToDoMethod = {handleEditToDo}
                    />
                ))}

            </div>

            <div className="column">
                <h2>In Bearbeitung</h2>
                {inProgressTodos.map((todo) => (
                    <TodoCard
                        key={todo.id}
                        todo={todo}
                        handleDeleteToDoMethod ={handleDeleteToDo}
                        handleEditToDoMethod = {handleEditToDo}
                    />
                ))}
            </div>

            <div className="column">
                <h2>Erledigt</h2>
                {doneTodos.map((todo) => (
                    <TodoCard
                        key={todo.id}
                        todo={todo}
                        handleDeleteToDoMethod ={handleDeleteToDo}
                        handleEditToDoMethod = {handleEditToDo}
                    />
                ))}
            </div>

        </div>
    )
}