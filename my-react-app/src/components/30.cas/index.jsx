import { useContext } from "react";
import { UserContext } from "./ContextProvider";

const Class30 = () => {
  const { user } = useContext(UserContext);

  return <div>{user}</div>;
};

export default Class30;
