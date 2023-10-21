interface LoginAction {
  type: "LOGIN";
  user: string;
}

interface LogoutAction {
  type: "LOGOUT";
}
type AuthAcion = LoginAction | LogoutAction;
const authReducer = (state: string, action: AuthAcion): string => {
  switch (action.type) {
    case "LOGIN":
      return action.user;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
};

export default authReducer;
