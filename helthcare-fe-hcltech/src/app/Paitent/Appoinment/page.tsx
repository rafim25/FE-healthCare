"use client";
import "../../style/Appoinment.css";
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
      <div className="dashboard-header text-white">
        <h1>Bayer Healthcare</h1>
      </div>
      <div className="main-container">
        <aside className="sidebar">
          <nav>
            <ul>
              <li>
                <a href="#dashboard">Dashboard</a>
              </li>
              <li>
                <a href="#patient-list">Patient List</a>
              </li>
              <li>
                <a href="#appointments">Appointments</a>
              </li>
              <li>
                <a href="#messages">Messages</a>
              </li>
              <li>
                <a href="#logout">Logout</a>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="content">
          <h1>Book an Appointment</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="doctor">Select Doctor</label>
              <select
                name="doctor"
                id="doctor"
                value={formData.doctor}
                onChange={handleInputChange}
              >
                <option value="">-- Select Doctor --</option>
                {doctors.map((doctor, index) => (
                  <option key={index} value={doctor}>
                    {doctor}
                  </option>
                ))}
              </select>
              {errors.doctor && <p className="error">{errors.doctor}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="date">Select Date</label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleInputChange}
              />
              {errors.date && <p className="error">{errors.date}</p>}
            </div>

            <div className="form-group">
              <label>Available Timeslots</label>
              <div className="timeslot-buttons">
                {timeslots.map((slot, index) => (
                  <button
                    type="button"
                    key={index}
                    className={`timeslot-button ${
                      formData.timeslots.includes(slot) ? "selected" : ""
                    }`}
                    onClick={() => handleTimeslotToggle(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              {errors.timeslots && <p className="error">{errors.timeslots}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="reason">Reason for Visit</label>
              <textarea
                name="reason"
                id="reason"
                value={formData.reason}
                onChange={handleInputChange}
              ></textarea>
              {errors.reason && <p className="error">{errors.reason}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="notes">Additional Notes (Optional)</label>
              <textarea
                name="notes"
                id="notes"
                value={formData.notes}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
