import { useContext } from "react";
import TaskList from "./TaskList";
import AuthContext from "./contexts/authContext";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  if (!user) return null;
  return <TaskList />;
};

export default HomePage;
