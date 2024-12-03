import { useState } from "react";
import { useSelector } from "react-redux";
import type { TodoState } from "../interfaces/todo.interface";
import TodosHeader from "./Header";
import TodoSelector from "./TodoSelector";
import TodoListContainer from "./TodoListContainer";
import AddTodoButton from "./AddTodoButton";
import Modal from "./Modal";
import TodoItemStateContent from "./TodoItemStateContent";

export default function Todos() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [activeView, setActiveView] = useState<string>("All");

    const todos = useSelector((state: { todos: TodoState }) => state.todos.todos);

    function closeModal(): void {
      setIsModalOpen(false);
    }

    return (
        <div className="todo-app">
            <TodosHeader todos={todos} />

            <TodoSelector 
                active={activeView}
                setActiveView={setActiveView}
            />

            <TodoListContainer 
                todos={todos}
                view={activeView}
            />

            <AddTodoButton setIsModalOpen={setIsModalOpen} />

            <Modal isOpen={isModalOpen} onClose={closeModal} title="Add a task">
                <TodoItemStateContent setIsModalOpen={setIsModalOpen}/>
            </Modal>
        </div>
    );
}
