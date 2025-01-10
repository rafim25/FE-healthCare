// pages/PatientDashboard.jsx
import React from 'react';
import { useRouter } from 'next/router';

const PatientDashboard = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Logic for logging out the user
    router.push('/login'); // Redirect to login page
  };

  return (
    <div className="flex flex-col md:flex-row">
      <aside className="bg-blue-500 text-white w-full md:w-1/4 p-4 ">
        <h2 className="text-lg font-bold">Bayer Health</h2>
        <nav className="mt-4">
          <ul>
            <li><a href="/dashboard" className="block py-2">Dashboard</a></li>
            <li><a href="/profile" className="block py-2">My Profile</a></li>
            <li><a href="/appointments" className="block py-2">Appointments</a></li>
            <li><a href="/health-records" className="block py-2">Health Records</a></li>
            <li><a href="/messages" className="block py-2">Messages</a></li>
            <li><button onClick={handleLogout} className="block py-2">Logout</button></li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold">Welcome, John</h1>

        <div className="mt-6 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
          <p>Next appointment: Dr. Smith on June 15, 2023 at 10:00 AM</p>
          <p>Following: Dr. Johnson on June 22, 2023 at 2:00 PM</p>
        </div>

        <div className="mt-6 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">Health Reminders</h2>
          <ul>
            <li>Take medication A at 9:00 AM daily</li>
            <li>Schedule annual check-up</li>
          </ul>
        </div>

        <div className="mt-6 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">Health Tip of the Day</h2>
          <p>Stay hydrated! Aim to drink at least 8 glasses of water per day.</p>
        </div>

        <div className="flex justify-between mt-6">
          <button className="bg-green-500 text-white p-2 rounded" onClick={() => router.push('/appointments')}>
            Book Appointment
          </button>
          <button className="bg-blue-500 text-white p-2 rounded" onClick={() => router.push('/health-records')}>
            View Health Records
          </button>
          <button className="bg-yellow-500 text-white p-2 rounded" onClick={() => router.push('/messages')}>
            Message Provider
          </button>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;