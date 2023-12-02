import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoList from "./react-query/TodoList";
import HomePage from "./state-management/HomePage";
import LoginStatus from "./state-management/auth/LoginStatus";
import NavBar from "./state-management/NavBar";
import TaskList from "./state-management/TaskList";
import TasksContext from "./state-management/contexts/tasksContext";
import tasksReducer from "./state-management/reducers/tasksReducer";
import authReducer from "./state-management/auth/authReducer";
import AuthContext from "./state-management/auth/authContext";
import TasksProvider from "./state-management/providers/TasksProvider";
import AuthProvider from "./state-management/auth/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <NavBar />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
