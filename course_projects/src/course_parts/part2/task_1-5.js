import React from 'react'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        },
        {
          name: 'Redux',
          exercises: 11
        }
      ]
    },
    {
      name: 'ReactJS',
      parts: [
        {
          name: 'Reacting with React',
          exercises: 55
        },
        {
          name: 'Not reacting with React',
          exercises: 22
        },
        {
          name: 'Stating states',
          exercises: 5
        },
        {
          name: 'Reducing Reduxes',
          exercises: 1
        }
      ]
    }
  ]

  const createCourses = () => {
    let table = []
    courses.map(function(course, i){
      table.push(<Header {...course} />)
      table.push(<Content {...course} />)
      table.push(<Total {...course} />)
    })
    return table
  }

  return(
    <div>
      {createCourses()}
    </div>
  )
}


const Header = (props) => {
  return <h1>{props.name}</h1>
}


const Content = (props) => {
  const parts = props.parts.map(function(part, i){
    console.log(i)
    return <Part text={part.name} number={part.exercises} key={i} id={i}/>
  })

  return (
    <>
      {parts}
    </>
  )
}

const Part = (props) => {
  return <p key={props.id}>{props.text} {props.number}</p>
}

const Total = (props) => {
  let total_excercises = 0

  props.parts.map(function(part){
    return total_excercises += part.exercises
  })

  return <p>Number of exercises {total_excercises}</p>
}


export default App;