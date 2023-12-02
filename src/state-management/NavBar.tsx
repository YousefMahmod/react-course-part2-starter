import LoginStatus from "./auth/LoginStatus";
import useAuthStore from "./auth/store";
import useTasks from "./hooks/useTasks";

const NavBar = () => {
  const { tasks } = useTasks();
  const { user } = useAuthStore();
  return (
    <nav className="navbar d-flex justify-content-between">
      {user && <span className="badge text-bg-secondary">{tasks.length}</span>}
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
