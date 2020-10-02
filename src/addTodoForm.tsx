import React, {ChangeEvent, FormEvent, useState} from "react";


interface AddTodoFormProps{
    addTodo: AddTodo;
}
export const AddTodoForm: React.FC<AddTodoFormProps> = ({addTodo}) => {
    const [newTodo, setNewTodo]= useState(""); 

    const handleChange= (e: ChangeEvent<HTMLInputElement>) =>{
    setNewTodo(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) =>{
        e.preventDefault(); /* empecher le rafraichissement de la page au clic*/
        addTodo(newTodo);
        setNewTodo (""); /* valeur par defaut du champs*/ 
    }

    return <div className="wrapp">
        <form className="formtodo">
        <input type="text" placeholder="To-do or not To-do" value={newTodo} onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>Add a task</button> 
        </form>
    </div>
}