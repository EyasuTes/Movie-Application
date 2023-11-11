import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Shows from "./pages/shows";
import Movies from "./pages/movies";
import RecentlyAdded from "./pages/recentlyAdded";
import MyList from "./pages/myList";
import Search from "./pages/search";
import Details from "./pages/details";
function App() {
  return (
    <div className="overflow-hidden ">
      <Router>
        <div className=" rounded-full bg-darkBlue z-0 h-96 w-96 fixed blur-3xl animate-blob"></div>
        <div className="top-0 right-0 rounded-full bg-darkBlue z-0 h-96 w-96 fixed blur-3xl animate-blob"></div>
        <div className="rounded-full animation-delay-2000 bg-darkBlue z-0 h-96 w-96 fixed left-1/2 top-1/2 blur-3xl animate-blob"></div>
        <div className="rounded-full animation-delay-6000 bg-darkBlue z-0 h-96 w-96 fixed left-0 top-3/4 blur-3xl animate-blob"></div>
        <div style={{ position: "fixed", top: 0, width: "100%", zIndex: "50" }}>
          <Navbar></Navbar>
        </div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/shows" element={<Shows />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route
            path="/recentlyAdded"
            element={<RecentlyAdded></RecentlyAdded>}
          ></Route>
          <Route path="/myList" element={<MyList />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/details" element={<Details />}></Route>
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
