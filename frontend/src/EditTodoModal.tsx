import './App.css'
import {Todo, Status} from "./Todo.ts";
import {ChangeEvent, FormEvent, useState} from "react";



type EditTodoModalProps = {
    todo: Todo;
    handleEditToDoMethod:(todo:Todo)=>void
    handleCloseModal:()=> void
};

export default function EditTodoModal(props: EditTodoModalProps) {
    const [editedTodo, setEditedTodo] = useState<Todo>({ ...props.todo });

    function handleDescriptionChange (event : ChangeEvent<HTMLInputElement>) {
        setEditedTodo({ ...editedTodo, description: event.target.value });
    }

    function handleStatusChange (event: ChangeEvent<HTMLSelectElement>) {
        setEditedTodo({ ...editedTodo, status: event.target.value as Status });
    }

    function handleSaveChanges (event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const editedToDoforSave: Todo = {
            id:props.todo.id,
            description: editedTodo.description,
            status: editedTodo.status
        }

        props.handleEditToDoMethod(editedToDoforSave)
              props.handleCloseModal();
    }

    return (
        <div className="edit-todo-modal">
            <form onSubmit={handleSaveChanges}>
            <label htmlFor="description"></label>
            <input
                type="text"
                value={editedTodo.description}
                onChange={handleDescriptionChange}
            />
            <label htmlFor="status"></label>
            <select
                value={editedTodo.status}
                onChange={handleStatusChange}
            >
                <option value="DOING">Doing</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="DONE">Done</option>
            </select>
            <button className={"button"} type="submit"  >Änderungen speichern</button>
            {/*<button onClick={props.handleCloseModal}>Abbrechen</button>*/}
            </form>
            </div>

    );
}
