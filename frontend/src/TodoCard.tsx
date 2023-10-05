
import {Link} from "react-router-dom";
import {Todo,Status} from "./Todo.ts";
import EditTodoModal from "./EditTodoModal.tsx";
import {useState} from "react";

type TodoCardProps = {
    todo: Todo,
    handleDeleteToDoMethod :(id : string) => void,
    handleEditToDoMethod :(todoAfterEdit : Todo) =>void

}

export default function TodoCard(props: TodoCardProps) {

    //const ItemToDeleted = props.todos.filter((todo) => todo.status === "DONE")

    const [showEditModal, setShowEditModal] = useState(false);

    const [newToDoAfterChangeTheStatus, setNewToDoAfterChangeTheStatus] = useState<Todo>({ ...props.todo });
    const handleEditClick = () => {
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false); // Hier wird das Modal geschlossen
    };
    function handleStatus (x: Status){

        const newToDoAfterChangeTheStatus : Todo={

            id:props.todo.id,
            description:props.todo.description,
            status:x
        }
        props.handleEditToDoMethod(newToDoAfterChangeTheStatus)
    }







    return (
        <div className={"TodoFile"}>
            <Link to={`/${props.todo.id}`}>
                <h3>{props.todo.description}</h3>
                <p>{props.todo.status}</p>
            </Link>
             <div className={"button-container"}>
            {props.todo.status === 'DONE' && (
                <button onClick={() => props.handleDeleteToDoMethod(props.todo.id)}  className={"button right-button"}>Löschen</button>
            )}

            {props.todo.status === 'OPEN' && (

                <button onClick={()=> handleStatus("IN_PROGRESS")}  className={"button right-button"}>zu 'in progress'</button>
            )}
            {props.todo.status === 'IN_PROGRESS'&& (
                 <div>
                <button onClick={()=> handleStatus("OPEN")}  className={"button right-button"}>zu 'open'</button>
                     <button onClick={()=> handleStatus("DONE")}  className={"button right-button"}>zu 'done'</button>

               </div>
            )}
            {props.todo.status === 'DONE' && (
                <button onClick={()=> handleStatus("IN_PROGRESS")}  className={"button left-button"}>zu 'in progress'</button>
            )}


                {showEditModal && (
                    <EditTodoModal
                        todo={props.todo}
                        handleEditToDoMethod={props.handleEditToDoMethod}
                            handleCloseModal={handleCloseEditModal}
                    />
                )}
            { props.todo.id && (<button onClick={handleEditClick}  className={"button"}>Bearbeiten</button>)}

             </div>
        </div>
    )
}
