import React, { useState } from 'react'


const Filtering = ({ newFilter, handleFiltering }) => {
  return (
    <div>
        Filter people: 
        <input
          value={newFilter}
          onChange={handleFiltering}
        />
    </div>
  )
}


const Persons = ({ personsToShow }) => {
  return(
    <ul>
        {personsToShow.map((person, i) => 
            <Person key={i} person={person} />
          )}
    </ul>
  )
}


const PersonForm = ({ addPerson, newName, handlePersonChange, newNumber, handleNumberChange }) => {
  return (
    <form onSubmit={addPerson}>
        <div>
          Name: 
          <input
            value={newName}
            onChange={handlePersonChange}
          />
        </div>
        <div>
          Number:
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
     </form>
  )
}


const Person = ({ person }) => {
  return (
    <li>{person.name} {person.number}</li>
  )
}


const FilterPersons = (persons, filterText) => {
  console.log(persons)
  console.log(filterText)
  console.log("FIltered list")
  console.log(persons.filter(el => el.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1))
  return persons.filter(el => el.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setFilter ] = useState('')
  const personsToShow = FilterPersons(persons, newFilter)

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }

    let nameExists = false


    persons.map((person) => {
      if (newName === person.name){
        nameExists = true
      }
    })

    if (nameExists) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }


  const handlePersonChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }


  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }


  const handleFiltering = (event) => {
    //console.log(event.target.value)
    setFilter(event.target.value)
    console.log("Persons after filtering")
    console.log(personsToShow)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filtering newFilter={newFilter} handleFiltering={handleFiltering}/>
      <h2>Add a new person</h2>
      <PersonForm addPerson={addPerson} newName={newName} handlePersonChange={handlePersonChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  )

}

export default App