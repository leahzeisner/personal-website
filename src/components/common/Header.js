import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-start items-center h-[10vh] w-screen bg-transparent">
      <ul className="flex flex-row justify-around w-2/5 font-bold uppercase text-darkblue">
        <li className="hover:text-pink">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-pink">
          <Link to="/work">Work Experience</Link>
        </li>
        <li className="hover:text-pink">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="hover:text-pink">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
