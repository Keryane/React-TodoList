import React from 'react';
import { ToDoListItem } from './ToDoListItem';


interface todoListProps{
     todos:Array<Todo>;
     toggleTodo: ToggleTodo;
     deleteTodo:DeleteTodo;
}

export const TodoList: React.FC<todoListProps> = ({todos, toggleTodo,deleteTodo}) =>{
    return (
        <div className="todolist">
             <ul>{todos.map(todo => {
                return <ToDoListItem key={todo.text} todo={todo}  toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
                 })}
            </ul>
        </div>
        );
};
