
type Todo={
    text:string,
    isDone:boolean;
  }

  type ToggleTodo = (selectedTodo : Todo) => void;

  type AddTodo= (newTodo: string) => void;

  type DeleteTodo = (deletedTodo: Todo) => void;