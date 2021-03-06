import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}


const Content = (props) => {
  return (
    <>
      <Part text={props.part_1} number={props.excercise_1} />
      <Part text={props.part_2} number={props.excercise_2} />
      <Part text={props.part_3} number={props.excercise_3} />
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.text} {props.number}
      </p>
    </>
  )
}


const Total = (props) => {

  const total_excercises = props.excercise_1 + props.excercise_2 + props.excercise_3
  return (
    <>
      <p>Number of exercises {total_excercises}</p>
    </>
  )
}


const App = () => {
  let props = {
    course: 'Half Stack application development',
    part_1: 'Fundamentals of React',
    part_2: 'Using props to pass data',
    part_3: 'State of a component',
    excercise_1: 10,
    excercise_2: 7,
    excercise_3: 14,
  }

  return (
    <div>
      <Header {...props} />
      <Content {...props} />
      <Total {...props} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))