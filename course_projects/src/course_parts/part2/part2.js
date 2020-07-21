import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CourseExample from './task_course_example'
import Task1_5 from './task_1-5'
import Task6_10 from './task_6-10'
import Task11 from './task_11'

export default function Navigation() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/part2/course_example">Course example</Link>
          </li>
          <li>
            <Link to="/part2/task1-5">Tasks 1-5 (Course information continuation)</Link>
          </li>
          <li>
            <Link to="/part2/task6-10">Tasks 6-10 (Phonebook)</Link>
          </li>
          <li>
            <Link to="/part2/task11">Task 11 (Phonebook step 6)</Link>
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
          <Route path="/part2/course_example">
            <CourseExample />
          </Route>
          <Route path="/part2/task1-5">
            <Task1_5 />
          </Route>
          <Route path="/part2/task6-10">
            <Task6_10 />
          </Route>
          <Route path="/part2/task11">
            <Task11 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
