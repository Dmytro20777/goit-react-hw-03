import { useState } from "react"

export const AddPerson = ({onAdd}) => {
  const [newUser, setNewUser] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(newUser);
    setNewUser("");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>Add new user
        <input
          type="text"
          name="newUser"
          value={newUser}
          onChange={(event) => setNewUser(event.target.value)}
        />
        <button type="submit">Add</button>
      </label>
    </form>
  )
}