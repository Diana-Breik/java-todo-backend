import './App.css'

import TodoCard from "./TodoCard.tsx";
import {Todo} from "./Todo.ts";

type TodosGalleryProps={
    todos: Todo[]
}
export default function TodosGallery(props: TodosGalleryProps){


    return(
        <div className={"TodoFile"}>
           <h3>todo-list</h3>
            {props.todos.map(todo => <TodoCard
                key={todo.id}
                todo={todo}
            />)}

        </div>
    )
}