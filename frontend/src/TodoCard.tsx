
import {Link} from "react-router-dom";
import {Todo} from "./Todo.ts";
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

    const handleEditClick = () => {
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false); // Hier wird das Modal geschlossen
    };

    return (
        <div className={"TodoFile"}>
            <Link to={`/${props.todo.id}`}>
                <h3>{props.todo.description}</h3>
                <p>{props.todo.status}</p>
            </Link>

            {props.todo.status === 'DONE' && (
                <button onClick={() => props.handleDeleteToDoMethod(props.todo.id)}>Löschen</button>
            )}



                {showEditModal && (
                    <EditTodoModal
                        todo={props.todo}
                        handleEditToDoMethod={props.handleEditToDoMethod}
                            handleCloseModal={handleCloseEditModal}
                    />
                )}
            { props.todo.id && (<button onClick={handleEditClick} >Bearbeiten</button>)}
                   {/* // 2 props.todo.id && (<button onClick={() => <EditTodoModal todo={props.todo} handleEditToDoMethod={props.handleEditToDoMethod}/>}>Bearbeiten</button>)

                // 1 alte version props.todo.id && (<button onClick={() => props.handleEditToDoMethod()}>Bearbeiten</button>)
            */}

        </div>
    )
}
