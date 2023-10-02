
import {Link} from "react-router-dom";
import {Todo} from "./Todo.ts";

type TodoCardProps = {
    todo: Todo,


}

export default function TodoCard(props: TodoCardProps) {


    return (
        <div className={"TodoFile"}>
            <Link to={`/${props.todo.id}`}>
                <h3>{props.todo.description}</h3>
                <p>{props.todo.status}</p>
            </Link>
        </div>
    )
}
