
import React from "react";
import {Link, useParams} from "react-router-dom";
import {Todo} from "./Todo.ts";


type TodoDetailsProps = {
    todos: Todo[];

};

export default function TodoDetails(props: TodoDetailsProps) {


    const urlParams = useParams()
    const currentTodo = props.todos.find((todo) => (todo.id === urlParams.id))

    return (
        <>
        <div className={"TodoFile"}>
            {currentTodo
                ? <>
                    <h2>ToDo Details</h2>
                    <p>Description:{currentTodo.description}</p>
                    <p>{currentTodo.status}</p>
                </>
                : <>
                    <p>Todo not found</p>
                </>
            }

        </div>
    <Link to={"/"}>
        <button >Zurück zur TodosGallery</button>
    </Link>
        </>
    );
}
