import React,{useEffect,useState} from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY ="todo-todos";

function App() {

const[todos,SetTodos]=useState([]);

useEffect(()=>{
 const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
 if (storageTodos){
   SetTodos(storageTodos);
 }
},[]);

useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos));
},[todos]);

function addTodo(todo){
  SetTodos([todo,...todos]);
}

function toggleComplete(id){
  SetTodos(
    todos.map(todo=>{
      if(todo.id===id){
        return{
          ...todo,
          completed:!todo.completed
        };
      }
      return todo;
    })

  );
}

function removeTodo(id){
 SetTodos(todos.filter(todo=>todo.id !== id));
}

  return (
    <div className="App">
      <header className="App-header">
        <p>React ToDo</p>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos}
         toggleComplete={toggleComplete}
         removeTodo={removeTodo}
         />
      </header>
    </div>
  );
}

export default App;
