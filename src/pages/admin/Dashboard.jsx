import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const DashboardPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="space-y-4">
      Dashboard for Mr. {user.userName} user! <br />
      <button
        className="px-4 py-2 rounded bg-purple-500 hover:bg-purple-600 text-white"
        onClick={() => setUser({ ...user, userName: "Abi" })}
      >
        Login with Abi
      </button>
    </div>
  );
};

export default DashboardPage;
