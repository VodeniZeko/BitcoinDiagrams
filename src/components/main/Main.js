import React, { useState, useRef, useEffect } from "react";
import Crypto from "../charts/crypto";
import Countries from "../charts/countries";
import Stocks from "../charts/stocks";
import RealEstate from "../charts/realEstate";
import NoMatch from "../noMatch";
import "./main.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Main() {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > elTopOffset + elHeight - 42) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1>Bitcoin vs World</h1>
        <h2>View the charts bellow</h2>
      </div>
      <Router>
        <div
          id="sticky-header"
          className={`navbar${sticky.isSticky ? " sticky" : ""}`}
          ref={headerRef}
        >
          <Link to="/">
            <h3>BTC vs Crypto</h3>
          </Link>
          <Link to="/real-estate">
            <h3>BTC vs Real Estate</h3>
          </Link>

          <Link to="/stocks">
            <h3>BTC vs Stocks</h3>
          </Link>
          <Link to="/countries">
            <h3>BTC vs Countries</h3>
          </Link>
        </div>

        <div className="main">
          <Switch>
            <Route exact path="/">
              <Crypto />
            </Route>
            <Route path="/real-estate">
              <RealEstate />
            </Route>
            <Route path="/stocks">
              <Stocks />
            </Route>
            <Route path="/countries">
              <Countries />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Main;
