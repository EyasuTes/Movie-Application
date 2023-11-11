import React from "react";
import { useShoppingCart } from "../context/movieContext";
import { useNavigate } from "react-router-dom";

const Slider = ({ id, original_title, overview, poster_path }) => {
  const { mylist, list, detail, removeFromList } = useShoppingCart();
  const navigate = useNavigate();

  function checkList() {
    const check = list.filter((li) => li.id === id);
    if (check.length === 0) {
      return false;
    } else {
      return true;
    }
  }
  const avaliable = checkList();

  return (
    <div className="text-c3white  rounded-lg">
      <div className="w-52 transition-all duration-500 ease-in-out hover:scale-95 relative">
        <div className="flex h-84 overflow-y-auto overflow-y-hidden opacity-0  flex-col absolute bg-black bg-opacity-40 hover:opacity-100 p-1">
          <div className="z-50 font-bold text-xl h-16 overflow-y-auto">
            {original_title}
          </div>
          <div className="mt-3 overflow-y-auto h-44 ">{overview}</div>
          {avaliable ? (
            <div className="flex gap-2 items-center justify-center mt-2">
              <button
                onClick={() => {
                  detail(id, original_title, overview, poster_path);
                  navigate("/details");
                }}
                className="bg-c1red w-24 rounded-sm font-bold"
              >
                Details
              </button>
              <button
                onClick={() => {
                  removeFromList(id);
                }}
                className="text-white font-bold bg-c2gray w-24 rounded-sm"
              >
                Remove
              </button>
            </div>
          ) : (
            <div className="flex gap-2 items-center justify-center mt-2">
              <button
                onClick={() => {
                  detail(id, original_title, overview, poster_path);
                  navigate("/details");
                }}
                className="bg-c1red w-24 rounded-sm font-bold "
              >
                Details
              </button>
              <button
                onClick={() =>
                  mylist(id, original_title, overview, poster_path)
                }
                className="text-c3white bg-c1red w-24 rounded-sm font-bold"
              >
                + My List
              </button>
            </div>
          )}
        </div>
        <img
          style={{ objectFit: "cover" }}
          className="rounded-md"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />
      </div>
    </div>
  );
};

export default Slider;
