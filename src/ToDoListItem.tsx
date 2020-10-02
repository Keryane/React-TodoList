import React from "react";
import "./TodoListitem.css"


interface TodoListitemProps{
    todo:Todo;
    toggleTodo: ToggleTodo;
    deleteTodo:DeleteTodo;
}

export const ToDoListItem: React.FC<TodoListitemProps> = ({
    todo,
    toggleTodo,
    deleteTodo
}) => {
    return (
        <li>
            <label className={todo.isDone? "isDone" : undefined}>
                <input type="checkbox" checked={todo.isDone} onChange ={() => toggleTodo(todo)}/>
                {todo.text}
                
            </label>
            <button className="deletebtn" onClick={()=>deleteTodo(todo)}>X</button>
        </li>
    );
};