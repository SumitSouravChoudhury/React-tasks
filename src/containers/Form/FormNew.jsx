import React, { useState } from "react";

const FormNew = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [finalData, setFinalData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFinalData((prev) => [...prev, formData]);
    setFormData({ name: "", email: "", password: "" });
  };

  console.log(finalData, "finalData");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          className="border rounded"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          className="border rounded"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input className="border rounded" type="password" />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>

      {finalData.map((data, index) => (
        <div key={index}>
          <span>Name:</span>
          <span>{data.name}</span>
          <span>Email:</span>
          <span>{data.email}</span>
        </div>
      ))}
    </div>
  );
};

export default FormNew;
