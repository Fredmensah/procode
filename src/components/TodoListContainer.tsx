import { Todo } from "../interfaces/todo.interface"
import TodoListItem from "./TodoItem"

interface TodoViewInterface { 
    todos: Todo[];
    view: string
}
export default function TodoListContainer({ todos, view }: TodoViewInterface) {
    const todoList = view === "All" ? todos : todos.filter((t: Todo) => t.status === "completed");
    
    return (
        <div className="todo-list-container">
            {todoList.length > 0 ? 
                todoList.map((todo: Todo) => (
                    <TodoListItem key={todo.id} todo={todo} />
                ))
            :
                <div className="empty-container">
                    Hey buddy, let's build something great today. Add some tasks  
                </div>
            }
        </div>
    );
}