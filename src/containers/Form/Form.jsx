import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name field is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email field is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password field is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasErrors = validate();

    if (hasErrors) {
      return;
    }

    setSubmittedData((prevData) => [...prevData, formData]);
    setFormData({ name: "", email: "", password: "" });
    setErrors({ name: "", email: "", password: "" });
  };

  return (
    <div className="flex flex-col gap-2 w-100">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Registration Form
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-100">
        <label className="font-medium">Name</label>
        <div className="relative">
          <input
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none w-full"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <span className="text-red-500 absolute top-[100%] left-0">
              {errors.name}
            </span>
          )}
        </div>

        <label className="font-medium">Email</label>
        <div className="relative">
          <input
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none w-full"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className="text-red-500 absolute top-[100%] left-0">
              {errors.email}
            </span>
          )}
        </div>

        <label className="font-medium ">Password</label>
        <div className="relative">
          <input
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none w-full"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className="text-red-500 absolute top-[100%] left-0">
              {errors.password}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700 transition-all cursor-pointer"
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
