function Dashboard({ presentCount, absentCount, percentage }) {
  return (
    <div className="dashboard">
      <div className="stat-card">
        <h2>{presentCount}</h2>
        <p>Present</p>
      </div>

      <div className="stat-card">
        <h2>{absentCount}</h2>
        <p>Absent</p>
      </div>

      <div className="stat-card">
        <h2>{percentage}%</h2>
        <p>Attendance</p>
      </div>
    </div>
  );
}

export default Dashboard;