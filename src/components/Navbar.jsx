import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { MagnifyingGlass, ArrowLeft } from "phosphor-react";
import { useShoppingCart } from "../context/movieContext";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [bsearch, setBsearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPath, setCurrentPath] = useState(location.pathname);

  const { addSearched } = useShoppingCart();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const handleNavigate = (path) => {
    navigate(path);
  };
  const handleSearch = () => {
    addSearched(search);

    setBsearch(true);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Call the function or trigger the action you want
      handleSearch();
    }
  };

  return (
    <div className="bg-opacity-0.1 z-60 relative lg:p-4 md:p-4 sm:p-4 p-0 flex flex-col gap-4 bg-navyBlue">
      <div className="flex justify-between text-c3white p-4 ">
        <div
          onClick={() => {
            handleNavigate("/");
          }}
        >
          <span
            className="bg-c1red p-4 rounded-sm cursor-pointer"
            style={{ clipPath: "polygon(0 0, 130% 50%, 0% 100%)" }}
          >
            Film
          </span>
          <span className="bg-c1red p-2 rounded-sm z-10 relative cursor-pointer">
            Finder
          </span>
        </div>
        <div className="relative z-10 flex">
          <input
            className={`text-c3white px-2 border-0 focus:border-0 bg-gray-700 opacity-0 transition-all duration-1000 rounded-xl ${
              bsearch ? "  w-44 opacity-100" : " w-0"
            }  `}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search here"
            onKeyDown={handleKeyDown}
          ></input>
          <NavLink
            className={" hover:scale-110 "}
            to={`${search !== "" ? "/search" : ""} `}
          >
            <div onClick={() => handleSearch()}>
              <MagnifyingGlass size={32} />
            </div>
          </NavLink>
        </div>
      </div>
      <div className="flex justify-around relative text-c3white">
        {console.log(currentPath)}
        <div
          className={`flex items-center gap-2 transition-all duration-300 ease-in-out ${
            currentPath === "/shows"
              ? "transform lg:translate-x-[-100px] translate-x-[-20px]"
              : ""
          } `}
        >
          <span
            className={
              currentPath === "/shows"
                ? "hover:text-c1red hover:scale-110 "
                : "hidden"
            }
            onClick={() => handleNavigate("/")}
          >
            <ArrowLeft size={18} />
          </span>
          <NavLink
            className={`hover:text-c1red hover:scale-110 sm:text-lg md:text-lg lg:text-lg text-xs ${
              currentPath === "/shows"
                ? ""
                : currentPath === "/"
                ? ""
                : "hidden"
            }`}
            to="/shows"
          >
            TV Shows
          </NavLink>
        </div>

        <div
          className={` flex items-center gap-2 transition-all duration-1000 ${
            currentPath === "/movies"
              ? "transform sm:translate-x-[-200px] md:translate-x-[-280px] translate-x-[-117px] lg:translate-x-[-350px] xl:translate-x-[-450px] 2xl:translate-x-[-500px]"
              : ""
          } `}
        >
          <span
            className={
              currentPath === "/movies"
                ? "hover:text-c1red hover:scale-110 "
                : "hidden"
            }
            onClick={() => handleNavigate("/")}
          >
            <ArrowLeft size={18} />
          </span>
          <NavLink
            className={`hover:text-c1red hover:scale-110 sm:text-lg md:text-lg lg:text-lg text-xs  ${
              currentPath === "/movies"
                ? ""
                : currentPath === "/"
                ? ""
                : "hidden"
            }`}
            to="/movies"
          >
            Movies
          </NavLink>
        </div>

        <div
          className={`flex items-center gap-2 transition-all duration-1000 ${
            currentPath === "/recentlyAdded"
              ? "transform sm:translate-x-[-300px] md:translate-x-[-400px] translate-x-[-167px] lg:translate-x-[-550px] xl:translate-x-[-700px] 2xl:translate-x-[-850px] "
              : ""
          } `}
        >
          <span
            className={
              currentPath === "/recentlyAdded"
                ? "hover:text-c1red hover:scale-110 "
                : "hidden"
            }
            onClick={() => handleNavigate("/")}
          >
            <ArrowLeft size={18} />
          </span>
          <NavLink
            className={`hover:text-c1red hover:scale-110 sm:text-lg md:text-lg lg:text-lg text-xs  ${
              currentPath === "/recentlyAdded"
                ? ""
                : currentPath === "/"
                ? ""
                : "hidden"
            }`}
            to="/recentlyAdded"
          >
            Recently Added
          </NavLink>
        </div>

        <div
          className={`flex items-center gap-2 transition-all duration-1000 ${
            currentPath === "/myList"
              ? "transform sm:translate-x-[-480px] md:translate-x-[-620px] translate-x-[-272px] lg:translate-x-[-830px] xl:translate-x-[-1050px] 2xl:translate-x-[-1200px] "
              : ""
          } `}
        >
          <span
            className={
              currentPath === "/myList"
                ? "hover:text-c1red hover:scale-110 "
                : "hidden"
            }
            onClick={() => handleNavigate("/")}
          >
            <ArrowLeft size={18} />
          </span>
          <NavLink
            className={`hover:text-c1red hover:scale-110 sm:text-lg md:text-lg lg:text-lg text-xs ${
              currentPath === "/myList"
                ? ""
                : currentPath === "/"
                ? ""
                : "hidden"
            }`}
            to="/myList"
          >
            My List
          </NavLink>
        </div>
      </div>
    </div>
  );
}
