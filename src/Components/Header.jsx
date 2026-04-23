import React, { useContext } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const nav = useNavigate();
  const { cart } = useContext(AppContext);
  return (
    <div className="figma">
      <article className="groceies">
        <div className="left_Header">
          <h1>DANIEL</h1>
        </div>
        <section className="middle_Header">
          <div className="btnCont">
            <button onClick={() => nav("/")} className="homeBtn">
              Home
            </button>
            <button onClick={() => nav("/store")} className="storeBtn">
              Store
            </button>
          </div>

          <section className="middle_Input">
            <input
              type="text"
              placeholder="Search for food items"
              className="food"
            />
            <button className="searchBtn">Search</button>
          </section>
        </section>
        <div className="btnWrap">
          <div className="cartBox" onClick={() => nav("/cart")}>
            <span className="cartIcon">🛒</span>
            <span className="cartCount">{cart.length}</span>
          </div>

          <button onClick={() => nav("/register")} className="registerBtn">
            Register
          </button>

          <button className="loginBtn">Login</button>
        </div>
      </article>
    </div>
  );
};

export default Header;
