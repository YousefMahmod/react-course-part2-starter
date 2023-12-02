import TaskList from "./TaskList";
import useAuthStore from "./auth/store";

const HomePage = () => {
  const { user } = useAuthStore();
  if (!user) return null;
  return <TaskList />;
};

export default HomePage;
