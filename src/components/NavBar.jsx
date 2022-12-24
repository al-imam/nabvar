import { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import MenuItems from "./MenuItems";

function NavBar() {
  const [clicked, setClicked] = useState(true);

  return (
    <nav className="bg-gradient-to-b from-g-100 to-g-200 h-20 flex items-center justify-between lg:justify-around text-xl relative ">
      <h1 className="text-white cursor-pointer inline font-Montserrat ml-6">
        React
        <FaReact className="ml-2 text-2xl inline font-bold" />
      </h1>
      <div className="mr-6 lg:hidden lg:absolute" onClick={() => setClicked((p) => !p)}>
        {clicked ? <ImCross className="text-white" /> : <FaBars className="text-white" />}
      </div>
      <ul
        className={`flex m-0 flex-col absolute left-0 top-20 w-full bg-[#6668f4] pb-3 lg:p-0 transition-all duration-300 lg:flex-row lg:relative lg:top-0 lg:w-auto lg:left-0 lg:gap-3 lg:justify-self-end lg:bg-transparent lg:items-center ${
          clicked ? "" : "left-[-100vw]"
        }`}
      >
        {MenuItems.map((item, id) => (
          <li
            key={id}
            className="text-center font-Montserrat py-5 lg:p-3 text-white transition-all hover:bg-link-hover hover:rounded"
          >
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
        <li className="text-center py-5 px-5 lg:p-0 font-Montserrat ">
          <a
            className="rounded py-2 px-5 bg-button-color text-white border-none outline-none cursor-pointer transition-all duration-300 hover:bg-white hover:text-g-200"
            href="#"
          >
            Sing Up
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
