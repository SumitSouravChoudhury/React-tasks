import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData((prevData) => [...prevData, formData]);
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="flex flex-col gap-2 w-100">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Registration Form
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-100">
        <label className="font-medium text-gray-700">Name</label>
        <input
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label className="font-medium text-gray-700">Email</label>
        <input
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label className="font-medium text-gray-700">Password</label>
        <input
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all cursor-pointer"
        >
          Submit
        </button>
      </form>

      {submittedData.length > 0 &&
        submittedData.map((data, index) => (
          <div key={index}>
            <span>Name:</span>
            <p>{data.name}</p>
            <span>Email:</span>
            <p>{data.email}</p>
          </div>
        ))}
    </div>
  );
};

export default Form;
