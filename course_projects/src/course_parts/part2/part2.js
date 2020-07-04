import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CourseExample from './task_course_example'
import { notes } from './task_course_example'
import Task1_5 from './task_1-5'

export default function Navigation() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/course_example">Course example</Link>
          </li>
          <li>
            <Link to="/task1-5">Tasks 1-5 (Course information continuation)</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route path="/course_example">
            <CourseExample notes={notes}/>
          </Route>
          <Route path="/task1-5">
            <Task1_5 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
