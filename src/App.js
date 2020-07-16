import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/about-components/About";
import Education from "./components/education-components/Education";
import Skill from "./components/skill-components/Skill";
import Project from "./components/project-components/Project";
import Achievement from "./components/achievement-components/Achievement";

function App() {
  return (
    <div>
      <Navbar />
      <div className="screen">
        <Switch>
          <Route exact path="/" render={() => <div>Welcome</div>} />
          <Route exact path="/about" component={About} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/skill" component={Skill} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/achievement" component={Achievement} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
