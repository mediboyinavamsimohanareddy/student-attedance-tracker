import { useState } from "react";

function AddStudent({ addStudent }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    addStudent(name);
    setName("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">
        Add Student
      </button>
    </form>
  );
}

export default AddStudent;