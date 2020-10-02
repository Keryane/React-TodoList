import React, { useState } from 'react';
import { AddTodoForm } from './addTodoForm';
import { TodoList } from './TodoList';




const InitialTodos: Array<Todo> = [
  {
    text:"walk the dog",
    isDone:false
  },
  {
    text:"feed the cat",
    isDone:false
  }
];

const App: React.FC=() => {
  const [todos, setTodos] = useState(InitialTodos); /* todos =variable avec la valeur d'initialTodos et setTodos permet de modfier cette valeur ( setState) */

const toggleTodo: ToggleTodo = selectedTodo => {
  const newTodos = todos.map(todo => {
    if(todo === selectedTodo){
      return{
        ...todo, /* ... = spread */
        isDone: !todo.isDone /* on change la valeur de isDone par l'inverse */
      }
    }
    
    return todo;
    
  });
  
  setTodos(newTodos);
};


const deleteTodo: DeleteTodo = deletedTodo =>{
  let x=0;
  let index=0;
  const listTodos = todos.map(todo => {
    
    
    if(todo === deletedTodo){
     index=x;
      
      
    }
    x++;
    // console.log(x)
    return todo;
    
  });
  
  listTodos.splice(index,1);
  // console.log(listTodos)
  setTodos(listTodos);
};



const addTodo : AddTodo= newTodo=>{
  newTodo.trim() !== "" && /* .trim retire les blanc en debut et fin, si le resultat n'est pas une chaine vide on continue*/
   setTodos([...todos, {text: newTodo, isDone: false}]);
};
 
  return (
    <React.Fragment>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    <AddTodoForm addTodo={addTodo}/>
    </React.Fragment>
   
  );
}

export default App;
