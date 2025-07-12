function Item({ text, isDone, onDelete, onToggleDone }) {
    return (
        <div className={`task ${isDone ? "done" : ""}`}>
            <span className="task-text">
                {text}
                {isDone && <span className="checkmark"> ✓</span>}
            </span>
            
            <div className="task-buttons">
                <button 
                    className="done-button" 
                    onClick={onToggleDone}
                >
                    {isDone ? "Undo" : "Done"}
                </button>
                
                <button 
                    className="delete-button" 
                    onClick={onDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Item;