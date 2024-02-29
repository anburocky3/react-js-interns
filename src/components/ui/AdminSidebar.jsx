import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const AdminSidebar = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-white p-10 rounded">
      <h4 className="font-semibold">Welcome {user.userName}</h4>
      <p className="text-gray-600">Here are your side menus</p>
    </div>
  );
};

export default AdminSidebar;
