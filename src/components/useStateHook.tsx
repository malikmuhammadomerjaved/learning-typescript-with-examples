import { useState } from "react";

//without any types
export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Log out</button>
      <p>User is {isLoggedIn ? "Logged In" : "Logged out"}</p>
    </div>
  );
};

//with for future types and empty initial state value
type UserProps = {
  name: string;
  email: string;
};

export const User = () => {
  //initial value is null but in future it can be of UserProps
  const [user, setUser] = useState<UserProps | null>(null);

  const handleLogin = () => {
    setUser({
      name: "Omer",
      email: "omer@gmail.com",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Log out</button>
      <p>
        User name is <strong>{user?.name}</strong> <br />
        email is <strong>{user?.email}</strong>
      </p>
    </div>
  );
};

//if we are confident that user will be of type UserProps then we can use type assertion like below
//otherwise it is better to use the method used in above example
export const User2 = () => {
  //if we want to get rid of ?. opeartors then we can we write-the useState as
  const [user, setUser] = useState<UserProps>({} as UserProps);

  const handleLogin = () => {
    setUser({
      name: "Omer",
      email: "omer@gmail.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <p>
        User name is <strong>{user?.name}</strong> <br />
        email is <strong>{user?.email}</strong>
      </p>
    </div>
  );
};
