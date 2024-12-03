import { Todo } from "../interfaces/todo.interface";

interface TodosHeaderProps {
    todos: Todo[];
}

export default function TodosHeader({todos}: TodosHeaderProps) {
    const todosCount = todos.length;
    const completedTodos = todos.filter((todo: Todo) => todo.status === "completed");

    const percentageCompleted = todosCount ? ((completedTodos.length / todosCount) * 100).toFixed(1) : 0.0; 
    const todaysDate = new Date();
    const day = todaysDate.getDate();
    const month = todaysDate.toLocaleString('en-GB', { month: 'short' });

    return (
        <div className="todos-header">
            <div className="secondary-header">
                <div className="row header-details">
                    <h1>To-do list</h1>

                    <div className="active-date-container">
                        <span className="date">{day}</span>
                        <span className="month">{month}</span>
                    </div>
                </div>

                <div className="row productivity-details">
                    <div className="item">
                        <p className="title">Total <br/>tasks</p>
                        <div className="score">{todosCount}</div>
                    </div>

                    <div className="item">
                        <p className="title">Completed <br/>Tasks</p>
                        <div className="score">{completedTodos.length}</div>
                    </div>

                    <div className="item">
                        <p className="title">Productivity <br/>Score</p>
                        <div className="score">{percentageCompleted}%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

