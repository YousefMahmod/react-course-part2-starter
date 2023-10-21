import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoList from "./react-query/TodoList";
import HomePage from "./state-management/HomePage";
import LoginStatus from "./state-management/LoginStatus";
import NavBar from "./state-management/NavBar";
import TaskList from "./state-management/TaskList";
import TasksContext from "./state-management/contexts/tasksContext";
import tasksReducer from "./state-management/reducers/tasksReducer";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");
  return (
    <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
      <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
        <NavBar />
        <HomePage />
      </AuthContext.Provider>
    </TasksContext.Provider>
  );
}

export default App;
