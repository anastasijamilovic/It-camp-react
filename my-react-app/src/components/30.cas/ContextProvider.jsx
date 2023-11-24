import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

const ContextProvider = (props) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const loginUser = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const responseData = await response.json();

        setTimeout(() => {
          throw new Error("it not work");
          setUser(responseData);
          setLoading(false);
        });

        setUser(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    loginUser();
  }, []);
  if (loading) {
    return <div>loading</div>;
  }

  if (!user) {
    return <div>not Autohorized</div>;
  }

  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
