"use client";
import React, { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    doctor: "",
    date: "",
    timeslots: [],
    reason: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  const doctors = ["Dr. John Doe", "Dr. Alice Smith", "Dr. Robert Brown"];
  const timeslots = ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTimeslotToggle = (slot) => {
    setFormData((prevState) => {
      const updatedSlots = prevState.timeslots.includes(slot)
        ? prevState.timeslots.filter((s) => s !== slot)
        : [...prevState.timeslots, slot];
      return { ...prevState, timeslots: updatedSlots };
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.doctor) newErrors.doctor = "Please select a doctor.";
    if (!formData.date) newErrors.date = "Please select a date.";
    if (formData.timeslots.length === 0)
      newErrors.timeslots = "Please select at least one timeslot.";
    if (!formData.reason)
      newErrors.reason = "Please provide a reason for the visit.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Appointment booked successfully!");
      setFormData({
        doctor: "",
        date: "",
        timeslots: [],
        reason: "",
        notes: "",
      });
      setErrors({});
    }
  };

  return (
    <>
      <div className="bg-blue-600 text-white p-4 text-center">
        <h1>Bayer Healthcare</h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <aside className="bg-gray-200 w-full md:w-1/4 p-4">
          <nav>
            <ul>
              <li>
                <a href="#dashboard" className="block py-2">Dashboard</a>
              </li>
              <li>
                <a href="#patient-list" className="block py-2">Patient List</a>
              </li>
              <li>
                <a href="#appointments" className="block py-2">Appointments</a>
              </li>
              <li>
                <a href="#messages" className="block py-2">Messages</a>
              </li>
              <li>
                <a href="#logout" className="block py-2">Logout</a>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="content flex-1 p-4">
          <h1 className="text-2xl mb-4">Book an Appointment</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-group">
              <label htmlFor="doctor" className="block mb-1">Select Doctor</label>
              <select
                name="doctor"
                id="doctor"
                value={formData.doctor}
                onChange={handleInputChange}
                className="border rounded p-2 w-full"
              >
                <option value="">-- Select Doctor --</option>
                {doctors.map((doctor, index) => (
                  <option key={index} value={doctor}>
                    {doctor}
                  </option>
                ))}
              </select>
              {errors.doctor && <p className="text-red-500 text-sm">{errors.doctor}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="date" className="block mb-1">Select Date</label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleInputChange}
                className="border rounded p-2 w-full"
              />
              {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
            </div>

            <div className="form-group">
              <label className="block mb-1">Available Timeslots</label>
              <div className="flex flex-wrap">
                {timeslots.map((slot, index) => (
                  <button
                    type="button"
                    key={index}
                    className={`border rounded p-2 m-1 ${formData.timeslots.includes(slot) ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    onClick={() => handleTimeslotToggle(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              {errors.timeslots && <p className="text-red-500 text-sm">{errors.timeslots}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="reason" className="block mb-1">Reason for Visit</label>
              <textarea
                name="reason"
                id="reason"
                value={formData.reason}
                onChange={handleInputChange}
                className="border rounded p-2 w-full"
              ></textarea>
              {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="notes" className="block mb-1">Additional Notes (Optional)</label>
              <textarea
                name="notes"
                id="notes"
                value={formData.notes}
                onChange={handleInputChange}
                className="border rounded p-2 w-full"
              ></textarea>
            </div>

            <button type="submit" className="bg-blue-600 text-white rounded p-2 w-full">
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </>
  );
}