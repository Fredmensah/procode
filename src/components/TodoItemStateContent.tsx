import { useState } from "react";
import { useDispatch } from "react-redux";
import { add, update } from "../store/slices/todoSlice";

export type FormfieldsType = {
    title: string;
    description: string;
    status: "active" | "completed"
}
interface Props {
    formfields?: FormfieldsType;
    setIsModalOpen: (state: boolean) => void;
    edit?: boolean;
    id?: string
}

export default function TodoItemStateContent({formfields: previousState, setIsModalOpen, edit, id}: Props): JSX.Element | null {
    const [formfields, setFormFields] = useState({
        title: previousState?.title ? previousState?.title : "",
        description: previousState?.description ? previousState?.description : "",
        status: previousState?.status ? previousState?.status : "active",
    });
    const dispatch = useDispatch();

    const formHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const {name, value} = event.target;

        setFormFields({
            ...formfields,
            [name]: value
        });
    }

    // Add a new todo
    const addTodoTask = () => {
        if (formfields.title && formfields.description) {
            const todo = {
                id: Math.random().toString(36).substr(2, 9),
                title: formfields.title,
                description: formfields.description,
                status: "active" as "active" | "completed",
                date: new Date().toISOString(),
                createdAt: new Date().toISOString(),
            };
            dispatch(add(todo));
            setFormFields({title: "", description: "", status: "active"});
            setIsModalOpen(false);
        } else {
            alert('Please fill all fields')
        }
    };

    // Save the edited todo
    const saveEdit = () => {
        if (id && formfields.title && formfields.description) {
            dispatch(update({ id: id, ...formfields, status: formfields.status, })); // Dispatch update action
            setFormFields({title: "", description: "", status: "active"});
            setIsModalOpen(false);
        } else {
            alert('Please fill all fields')
        }
    };

    return (
        <div className="add-new-todo-modal">
            <input
                type="text"
                value={formfields.title}
                placeholder="Title..."
                name="title"
                autoFocus={true}
                onChange={(e) => formHandler(e)}
            />

            <textarea
                value={formfields.description}
                placeholder="Enter description here..."
                name="description"
                onChange={(e) => formHandler(e)}
                rows={5}
            />

            <button onClick={edit ? saveEdit : addTodoTask} className="save">
                {edit ? "Edit task" : "Add task"}
            </button>
        </div>
    )
}