import { Link } from "react-router-dom";

const TheNavbar = () => {
  return (
    <div className="bg-indigo-500 text-white px-10 py-5 flex items-center justify-between">
      <Link to="/" className="font-semibold text-xl">
        Anbu&apos;s Blog!
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/followers">Followers</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default TheNavbar;
