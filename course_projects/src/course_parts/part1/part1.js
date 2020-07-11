import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Task12_14 from './task_12-14'
import Task6_11 from './task_6-11'
import Task3_5 from './task_3-5'
import CourseExample from './task_course_example'
import { anecdotes } from './task_12-14'

export default function Navigation() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/part1/course_example">Course example</Link>
          </li>
          <li>
            <Link to="/part1/task3-5">Tasks 3-5</Link>
          </li>
          <li>
            <Link to="/part1/task6-11">Tasks 6-11 (Unicafe)</Link>
          </li>
          <li>
            <Link to="/part1/task12-14">Tasks 12-14 (Anecdotes)</Link>
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
          <Route path="/part1/course_example">
            <CourseExample />
          </Route>
          <Route path="/part1/task3-5">
            <Task3_5 />
          </Route>
          <Route path="/part1/task6-11">
            <Task6_11 />
          </Route>
          <Route path="/part1/task12-14">
            <Task12_14 anecdotes={ anecdotes }/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
