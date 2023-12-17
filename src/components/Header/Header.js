import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { addSearch } from "../../features/filterSlice/filterSlice";
const Header = () => {
  const [searched, setsearched] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSearch(searched));
  }, [searched, dispatch]);
  return (
    <>
      <nav className="container relative py-3">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="flex-1 max-w-xs search-field group">
            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
            <input
              type="text"
              value={searched}
              onChange={(e) => setsearched(e.target.value)}
              placeholder="Search Task"
              className="search-input"
              id="lws-searchTask"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
