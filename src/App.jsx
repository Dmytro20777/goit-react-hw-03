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
    return [];
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
    <div>
      <h1>Phonebook</h1>
      <ContactForm addNewUser={addNewUser} />
      <SearchBox value={inputValue} onChange={setInputValue} />
      <ContactList items={visibleUser} onDelete={deleteUser} />
    </div>
  );
};
