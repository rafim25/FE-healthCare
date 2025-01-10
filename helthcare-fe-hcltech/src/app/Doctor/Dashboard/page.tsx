"use client";
import "../../style/doctorDashboard.css";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const navigateTo = (path) => {
    router.push(path);
  };
  const doctorName = "Dr. John Doe";
  const appointments = [
    {
      id: 1,
      patient: "Alice Johnson",
      time: "10:00 AM",
      reason: "Routine Check-up",
    },
    {
      id: 2,
      patient: "Bob Smith",
      time: "10:30 AM",
      reason: "Follow-up on Test Results",
    },
    {
      id: 3,
      patient: "Charlie Brown",
      time: "11:00 AM",
      reason: "Consultation for Back Pain",
    },
  ];

  const recentPatients = [
    {
      id: 1,
      name: "Emily Davis",
      lastVisit: "2023-12-25",
      action: "View Details",
    },
    {
      id: 2,
      name: "Michael Lee",
      lastVisit: "2023-12-22",
      action: "View Details",
    },
    {
      id: 3,
      name: "Sophia Taylor",
      lastVisit: "2023-12-20",
      action: "View Details",
    },
  ];

  return (
    <>
      <div className="dashboard-container">
        <aside className="sidebar">
          <nav>
            <ul>
              <li onClick={() => navigateTo("/Dashboard")}>Dashboard</li>
              <li>Patient List</li>
              <li>Appointments</li>
              <li>Messages</li>
              <li>Logout</li>
            </ul>
          </nav>
        </aside>

        <main className="main-content">
          <header className="header">
            <h1>Welcome, {doctorName}</h1>
          </header>

          <section className="appointments">
            <h2>Today's Appointments</h2>
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Patient Name</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td>{appointment.time}</td>
                    <td>{appointment.patient}</td>
                    <td>{appointment.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="recent-patients">
            <h2>Recent Patients</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Last Visit</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {recentPatients.map((patient) => (
                  <tr key={patient.id}>
                    <td>{patient.name}</td>
                    <td>{patient.lastVisit}</td>
                    <td>
                      <button className="action-button">
                        {patient.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </>
  );
}
