import { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import MenuItems from "./MenuItems";

function NavBar() {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-g-100 to-g-200 h-20 justify-center items-center text-xl relative">
      <h1 className="text-white ml-5 justify-self-start cursor-pointer inline font-Montserrat">
        React
        <FaReact className="ml-2 text-2xl inline font-bold" />
      </h1>
      <div className="" onClick={() => setClicked((p) => !p)}>
        {clicked ? <ImCross className="text-white" /> : <FaBars className="text-white" />}
      </div>
      <ul
        className={
          clicked
            ? "bg-slate-600 left-0"
            : "flex flex-col w-full h-[500px] absolute top-20 left-[-100%] opacity-100 transition-all lg:grid lg:gap-3 lg:grid-cols-5-auto lg:text-center lg:justify-end lg:w-[70vw]"
        }
      >
        {MenuItems.map((item, id) => (
          <li key={id}>
            <a
              className="font-Montserrat py-2 px-4 text-white transition-all hover:bg-link-hover hover:rounded"
              href={item.url}
            >
              {item.title}
            </a>
          </li>
        ))}
        <li>
          <a
            className="py-2 px-5 font-Montserrat rounded bg-button-color text-white border-none outline-none cursor-pointer transition-all duration-300 hover:bg-white hover:text-g-200"
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
