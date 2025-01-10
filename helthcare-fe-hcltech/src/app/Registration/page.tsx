"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../Components/Header";
const PatientRegistrationForm = () => {
  const router = useRouter();
  const navigateTo = (path) => {
    router.push(path);
  };
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    phoneNumber: "",
    email: "",
    currentAddress: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    permanentAddress: {
      sameAsCurrent: false,
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    primaryHealthConcerns: "",
    allergies: "",
    bloodGroup: "",
    existingConditions: "",
    currentMedications: "",
    emergencyContact: {
      name: "",
      relationship: "",
      phoneNumber: "",
    },
    insurance: {
      providerName: "",
      policyNumber: "",
      validityDate: "",
    },
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleNestedChange = (section, key, value) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     [section]: {
  //       ...prev[section],
  //       [key]: value,
  //     },
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleRegisterClick = () => {
    router.push("/register"); // Navigate to the register page
  };

  return (
    <>
      <Header />
      <form
        onSubmit={handleSubmit}
        className="w-full p-6 bg-white shadow-md rounded-lg space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          User Registration Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">First Name *</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              value={formData.firstName}
              required
              className="border border-gray-300 p-2 rounded w-full"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">Last Name *</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              value={formData.lastName}
              required
              className="border border-gray-300 p-2 rounded w-full"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Date of Birth *</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              required
              className="border border-gray-300 p-2 rounded w-full"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">Gender *</label>
            <select
              name="gender"
              value={formData.gender}
              required
              className="border border-gray-300 p-2 rounded w-full"
              onChange={handleChange}
            >
              <option value="">Please select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Phone Number *</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter phone number"
              value={formData.phoneNumber}
              required
              className="border border-gray-300 p-2 rounded w-full"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">Email *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              required
              className="border border-gray-300 p-2 rounded w-full"
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block mb-1">Primary Health Concerns</label>
          <textarea
            name="primaryHealthConcerns"
            placeholder="Describe primary health concerns"
            value={formData.primaryHealthConcerns}
            className="border border-gray-300 p-2 rounded w-full"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1">Blood Group</label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            className="border border-gray-300 p-2 rounded w-full"
            onChange={handleChange}
          >
            <option value="">Please select</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        <div className="flex  md:flex-row space-x-0 md:space-x-2 mt-4">
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600 flex-1"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-red-500 text-white p-2 rounded hover:bg-red-600 flex-1 mt-2 md:mt-0"
          >
            Reset
          </button>
          <button
            type="button"
            className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 flex-1 mt-2 md:mt-0"
            onClick={() => navigateTo("/Dashboard")}
          >
            Back
          </button>
        </div>
      </form>
    </>
  );
};

export default PatientRegistrationForm;
