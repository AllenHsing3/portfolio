import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from  "./components/Contact"
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
       <Route exact path="/" component={Landing}/>
        <Switch>
        <Route exact path="/about" component={About}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/contact" component={Contact}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
