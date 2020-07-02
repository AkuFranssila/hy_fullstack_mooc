import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return <h1>{props.course}</h1>
}


const Content = (props) => {
  return (
    <>
      <Part text={props.part_1.name} number={props.part_1.exercises} />
      <Part text={props.part_2.name} number={props.part_2.exercises} />
      <Part text={props.part_3.name} number={props.part_3.exercises} />
    </>
  )
}

const Part = (props) => {
  return <p>{props.text} {props.number}</p>
}


const Total = (props) => {
  const total_excercises = props.part_1.exercises + props.part_2.exercises + props.part_3.exercises
  return <p>Number of exercises {total_excercises}</p>
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part_1={part1}  part_2={part2} part_3={part3} />
      <Total part_1={part1}  part_2={part2} part_3={part3} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))