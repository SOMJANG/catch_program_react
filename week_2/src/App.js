import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";

export default () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/movie/list" component={MovieList} />
    <Route exact path="/movie/detail/:id" component={MovieDetail} />
  </Router>
);