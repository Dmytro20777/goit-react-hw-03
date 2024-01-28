import { useState } from "react";
import { ContactList } from "./ContactList/ContactList";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactForm } from "./ContactForm/ContactForm";
import { nanoid } from 'nanoid';
import { useEffect } from "react";

export const App = () => {
  const [persons, setPersons] = useState(() => {
    const savedObjectNumbers = window.localStorage.getItem("savedNummers");

    const parsedNumbers = JSON.parse(savedObjectNumbers);
    if (parsedNumbers && typeof parsedNumbers === "object") {
      return parsedNumbers;
    } 
    return [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ];
  });

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("savedNummers", JSON.stringify(persons));
  }, [persons]);

  const visibleUser = persons.filter((person) => person.name.toLowerCase().includes(inputValue.toLowerCase()));

  const addNewUser = (newUser, newNumber) => {
    setPersons((prevUsers) => {
      return [...prevUsers, {
        id: nanoid(),
        name: newUser,
        number: newNumber
      }]
    });
    setInputValue("");
  };

  const deleteUser = (userId) => {
    setPersons((prevUsers) => {
      return prevUsers.filter((user) => user.id !== userId);
    });
  };

  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto"}}>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <ContactForm addNewUser={addNewUser} />
      <SearchBox value={inputValue} onChange={setInputValue} />
      <ContactList items={visibleUser} onDelete={deleteUser} />
    </div>
  );
};
