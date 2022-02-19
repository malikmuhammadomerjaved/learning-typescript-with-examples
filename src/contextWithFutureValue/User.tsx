import { useContext } from "react";
import { UserContext } from "./UserContext";

export const UserForContext = () => {
  const example = useContext(UserContext);

  const handleLogin = () => {
    if (example) {
      example.setUser({
        name: "omer",
        email: "omer@omer.com",
      });
    }
  };

  const handleLogout = () => {
    if (example) {
      example.setUser(null);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {example?.user?.name}</div>
      <div>User email is {example?.user?.email}</div>
    </div>
  );
};
