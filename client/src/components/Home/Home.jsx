import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";// rendered into DOM as part of the return from the react component.
const Home = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>AUTHOR & BOOK DATA</h1>
        <h2>NAME: SIDDHANTI KAKDE</h2>
        <h2>DEPARTMENT: CSE (Data Science)</h2>
        <h2>ROLL NUMBER: 25</h2>
        <h2>WEB DEVELOPMENT</h2>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            gap: "4rem",
            justifyContent: "center", // distribute sace between and arounf items
          }}
        >
          <div>
            <Link to="/books">
              <button class="btn">
                <i class="animation"></i>Get Books<i class="animation"></i>
              </button>
            </Link>
          </div>
          <div>
            <Link to="/author">
              <button class="btn">
                <i class="animation"></i> Authors<i class="animation"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
