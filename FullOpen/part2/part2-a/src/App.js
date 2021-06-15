import React, { useState } from "react";

const Persons = ({ persons }) => {
  return (
    <div>
      <ul>
        {persons.map((person, x) =>
          <li key={x}>{person.name} {person.number}</li>
        )}
      </ul>
    </div>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '210-788-1293' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');
  const [shouldSearch, setShouldSearch] = useState(true);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  }

  const addNewPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    }
    setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App;