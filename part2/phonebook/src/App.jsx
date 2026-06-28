import { useState } from 'react'
import Contacts from './components/Contacts'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      const anotherPerson = {
        name: newName,
        number: newNumber,
        id: String(persons.length + 1)
      }
      setPersons(persons.concat(anotherPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  const personsToShow = persons.filter(person => 
    person.name.toUpperCase().includes(newFilter.toUpperCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter text="filter shown with" value={newFilter} 
      onChange={()=> setNewFilter(event.target.value)}/>
      <h3>add a new</h3>
      <PersonForm onSubmit={addPerson} nameValue={newName} 
      nameInputChange= {(event) => setNewName(event.target.value)} 
      numberValue={newNumber} numberInputChange={(event) => setNewNumber(event.target.value)}
      buttonText="add"
      />
      <h3>Numbers</h3>
      <Contacts persons={personsToShow} />
    </div>
  )
}

export default App