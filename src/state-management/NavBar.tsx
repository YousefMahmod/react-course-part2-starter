import LoginStatus from "./auth/LoginStatus";
import useAuth from "./auth/useAuth";
import useTasks from "./hooks/useTasks";

const NavBar = () => {
  const { tasks } = useTasks();
  const { user } = useAuth();
  return (
    <nav className="navbar d-flex justify-content-between">
      {user && <span className="badge text-bg-secondary">{tasks.length}</span>}
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
