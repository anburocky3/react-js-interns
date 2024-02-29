import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";
import { BlogContext } from "../contexts/BlogContext";
import { useState } from "react";

const GuestLayout = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div className="bg-gray-300 min-h-screen pb-10">
      <TheNavbar />

      <BlogContext.Provider value={{ posts, setPosts }}>
        <Outlet />
      </BlogContext.Provider>
    </div>
  );
};

export default GuestLayout;
