interface SelectorInterface {
    active: string;
    setActiveView: (view: string) => void;
}
export default function TodoSelector({active, setActiveView}: SelectorInterface) {
    return (
        <div className="todo-selector">
            <div onClick={() => setActiveView('All')} className={`item ${active === "All" ? 'active' : ""}`}>
                All tasks
            </div>

            <div onClick={() => setActiveView('Completed')} className={`item ${active !== "All" ? 'active' : ""}`}>
                Completed tasks
            </div>
        </div>
    )
}
