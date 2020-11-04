import React from 'react';
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./css/Main.css"
import './App.css';
import Home from "./pages/home"
import Reports from "./pages/reports"
import Products from "./pages/products"

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' exact component={Reports} />
          <Route path='/products' exact component={Products} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
