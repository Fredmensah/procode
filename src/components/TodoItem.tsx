import { useState } from "react";
import { Todo } from "../interfaces/todo.interface";
import { FaTrash, FaEdit } from "react-icons/fa";
import IconButton from "./IconButton";
import Modal from "./Modal";
import TodoItemStateContent from "./TodoItemStateContent";
import { clear, update } from "../store/slices/todoSlice";
import { useDispatch } from "react-redux";

interface TodosHeaderProps {
    todo: Todo;
}

export default function TodoListItem({todo}: TodosHeaderProps) {
    const dispatch = useDispatch();

    // const [formfields, setFormfields] = l
    const [edit, setEdit] = useState<boolean>(false);
    const getDateFormatted = (isoDate: string): string => {
        const date = new Date(isoDate); // Convert to Date object

        // Extract day and month
        const day = date.getDate();
        const month = date.toLocaleString('en-GB', { month: 'short' });

        return `${day} ${month}`;
    }

    function closeModal(): void {
        setEdit(false);
    }

    // Delete a todo
    const deleteTodo = (id: string) => {
        dispatch(clear(id)); // Clear todo by id
    };

    // Save the edited todo
    const changeStatusHandler = () => {
        if (todo.id) {
            dispatch(update({ id: todo.id, title: todo.title, description: todo.description, status: todo.status === "active" ? "completed" : "active" }));
        }
    };

    return (
        <div className="todo-item">
            <div className="details">
                <div className="todo-radiocheck">
                    <input onChange={changeStatusHandler} type="radio" id="single-radio" name="radio" className="radio-input" />
                    <span onClick={changeStatusHandler} className={`radio-circle ${todo.status === "active" ? "" : "completed"}`}></span>
                </div>
                <div className="todo-real-details">
                    <div className="title">{todo.title}</div>
                    <div className="date">{getDateFormatted(todo.date)}</div>
                </div>
            </div>
            <Modal isOpen={edit} onClose={closeModal} title="Edit a task">
                <TodoItemStateContent id={todo.id} edit={true} setIsModalOpen={setEdit} formfields={{title: todo.title, description: todo.description, status: todo.status}} />
            </Modal>

            <div className="action">
                <IconButton
                    icon={<FaEdit />}
                    onClick={() => setEdit(true)}
                    size="small"
                    color="#4CAF50"
                    tooltip="Edit"
                />
                <IconButton
                    icon={<FaTrash />}
                    onClick={() => deleteTodo(todo.id)}
                    size="large"
                    color="#F44336"
                    tooltip="Delete"
                />
            </div>
        </div>
    )
}