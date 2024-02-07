import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";

const GuestLayout = () => {
  return (
    <div className="bg-gray-300 min-h-screen pb-10">
      <TheNavbar />

      <Outlet />
    </div>
  );
};

export default GuestLayout;
