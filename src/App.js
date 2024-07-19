import React, { useReducer } from "react";
import "./App.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

let nextId = 4;

const initialTasks = [
  { id: 1, text: "Finish reading the book", done: true },
  { id: 2, text: "Exercise for 30 minutes", done: false },
  { id: 3, text: "Write a blog post", done: true },
];

function todoReducer(tasks, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...tasks,
        {
          id: nextId++,
          text: action.text,
          done: true,
          editing: false,
        },
      ];
    case "UPDATE_TODO":
      return tasks.map((todo) =>
        todo.id === action.task.id
          ? { ...todo, text: action.task.text, editing: false }
          : todo
      );
    case "DELETE_TODO":
      return tasks.filter((todo) => todo.id !== action.id);
    case "TOGGLE_TODO":
      return tasks.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "START_EDITING":
      return tasks.map((todo) =>
        todo.id === action.id ? { ...todo, editing: true } : todo
      );
    case "CANCEL_EDITING":
      return tasks.map((todo) =>
        todo.id === action.id ? { ...todo, editing: false } : todo
      );
    case "REMOVE_ALL_TODO":
      return [];
    default:
      return tasks;
  }
}

function App() {
  const [tasks, dispatch] = useReducer(todoReducer, initialTasks);

  return (
    <div>
      <h2>Todo List App:</h2>
      <AddTodo dispatch={dispatch} />
      <TodoList tasks={tasks} dispatch={dispatch} />
      <button onClick={() => dispatch({ type: "REMOVE_ALL_TODO" })}>
        Remove All
      </button>
    </div>
  );
}

export default App;
