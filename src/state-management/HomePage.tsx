import TaskList from "./TaskList";
import useAuth from "./auth/useAuth";

const HomePage = () => {
  const { user } = useAuth();
  if (!user) return null;
  return <TaskList />;
};

export default HomePage;
