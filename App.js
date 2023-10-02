import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={60}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  key="general"
                  pageSize={11}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              path="/"
              element={
                <News
                  key="lifestyle"
                  pageSize={9}
                  country="in"
                  category="lifestyle"
                />
              }
            ></Route>
            <Route
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={9}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={9}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={9}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
