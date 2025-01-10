"use client";
import { useRouter } from "next/navigation";
import Header from "@/app/Components/Header";
export default function Page() {
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
      <Header />
      <div className="flex flex-col md:flex-row">
        <aside className="bg-gray-200 w-full md:w-1/4 p-4">
          <nav>
            <ul className="space-y-2">
              <li onClick={() => navigateTo("/Dashboard")} className="cursor-pointer hover:text-blue-600">Dashboard</li>
              <li className="cursor-pointer hover:text-blue-600">Patient List</li>
              <li className="cursor-pointer hover:text-blue-600">Appointments</li>
              <li className="cursor-pointer hover:text-blue-600">Messages</li>
              <li className="cursor-pointer hover:text-blue-600">Logout</li>
            </ul>
          </nav>
        </aside>

        <main className="flex-1 p-4">
          <header className="mb-4">
            <h1 className="text-2xl font-bold">Welcome, {doctorName}</h1>
          </header>

          <section className="appointments mb-6">
            <h2 className="text-xl font-semibold mb-2">Today's Appointments</h2>
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">Time</th>
                  <th className="border border-gray-300 p-2">Patient Name</th>
                  <th className="border border-gray-300 p-2">Reason</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-2">{appointment.time}</td>
                    <td className="border border-gray-300 p-2">{appointment.patient}</td>
                    <td className="border border-gray-300 p-2">{appointment.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="recent-patients">
            <h2 className="text-xl font-semibold mb-2">Recent Patients</h2>
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">Name</th>
                  <th className="border border-gray-300 p-2">Last Visit</th>
                  <th className="border border-gray-300 p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentPatients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-2">{patient.name}</td>
                    <td className="border border-gray-300 p-2">{patient.lastVisit}</td>
                    <td className="border border-gray-300 p-2">
                      <button className="bg-blue-600 text-white rounded px-2 py-1 hover:bg-blue-700">
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