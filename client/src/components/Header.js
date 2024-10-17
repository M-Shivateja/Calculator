import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between max-w-4xl mx-auto">
        <h1 className="text-xl font-bold">Calculator App</h1>
        <div>
          <Link to="/signup" className="mr-4 hover:underline">
            Signup
          </Link>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
