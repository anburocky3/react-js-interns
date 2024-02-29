import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const DashboardPage = () => {
  const user = useContext(UserContext);

  console.log(user);

  return <div>Dashboard for Mr. {user.userName} user!</div>;
};

export default DashboardPage;
