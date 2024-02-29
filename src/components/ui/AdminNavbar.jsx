import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const AdminNavbar = () => {
  // useContext()

  const user = useContext(UserContext);

  console.log(user);

  return (
    <div className="bg-lime-800 text-white px-10 py-5 flex items-center justify-between">
      <Link to="/" className="font-semibold text-xl">
        Anbu&apos;s Blog!
      </Link>
      <ul className="flex space-x-4">
        <li>Welcome {user.userName}</li>
        <li>
          <Link to="#">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavbar;
