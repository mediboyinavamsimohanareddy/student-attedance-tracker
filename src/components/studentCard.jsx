function StudentCard({ student, toggleAttendance }) {
  return (
    <div className="card">
      <h3>{student.name}</h3>

      <p>
        Status:
        <span className={student.present ? "present-badge" : "absent-badge"}>
          {student.present ? " Present ✅" : " Absent ❌"}
        </span>
      </p>
<button
  className="toggle-btn"
  onClick={() => toggleAttendance(student.id)}
>
  {student.present ? "Mark Absent" : "Mark Present"}
</button>
    </div>
  );
}

export default StudentCard;