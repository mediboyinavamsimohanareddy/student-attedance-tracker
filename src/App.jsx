import { useState } from "react";
import "./App.css";

import StudentCard from "./components/StudentCard";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Vamsi", present: true },
    { id: 2, name: "Tausif", present: false },
    { id: 3, name: "Vamsi Krishna", present: true },
  ]);

  const [search, setSearch] = useState("");

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? {
              ...student,
              present: !student.present,
            }
          : student
      )
    );
  };

  const addStudent = (name) => {
    const newStudent = {
      id: Date.now(),
      name:name,
      present: true,
    };

    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents(
      students.filter(
        (student) => student.id !== id
      )
    );
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const presentCount = students.filter(
    (student) => student.present
  ).length;

  const absentCount =
    students.length - presentCount;

  const percentage =
    students.length === 0
      ? 0
      : (
          (presentCount / students.length) *
          100
        ).toFixed(0);

  return (
    <div className="container">
      <h1>📚 Student Attendance Tracker</h1>

      <Dashboard
        presentCount={presentCount}
        absentCount={absentCount}
        percentage={percentage}
      />

      <input
        className="search-box"
        type="text"
        placeholder="Search Student..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <AddStudent addStudent={addStudent} />

      <div className="students-container">
        {filteredStudents.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            toggleAttendance={toggleAttendance}
            deleteStudent={deleteStudent}
          />
        ))}
      </div>
    </div>
  );
}

export default App;