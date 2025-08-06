import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  // Form Data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setloading] = useState("false");

  // It will Hold the Error of the Register User Form
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    setloading(true);
    e.preventDefault();

    // API for Registering User and storing user detail in DB will come here
    // const res = await fetch('');

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword)
      return setError("All fields required");
    if (password !== confirmPassword) return setError("Passwords do not match");

    console.log("Registered:", formData);
    setError("");
  };

  return (
    // Register Page UI
    <div className="flex items-center justify-center min-h-screen bg-[#090040] px-4">
      <div className="bg-white p-8 rounded shadow w-[95vw] sm:w-[45vw] md:w-[40vw]">
        <h2 className="text-2xl text-[#471396] font-bold mb-4 text-center">
          Let us Know You Better!!
        </h2>

        {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}
        {/* Register Page Form */}

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Username Input */}

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border px-3 py-2 rounded"
          />

          {/* Email Input */}
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className="w-full border px-3 py-2 rounded"
          />

          {/* Password Input */}
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            type="password"
            className="w-full border px-3 py-2 rounded"
          />

          {/* Confirm-Password Input */}
          <input
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            type="password"
            className="w-full border px-3 py-2 rounded"
          />

          {/* Form Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#471396] w-full bg-blue-600  text-white py-2 rounded hover:bg-[#B13BFF]"
          >
            {loading ? 'Registering...' : 'Register' }
          </button>
        </form>

        {/* It will route to Sign-in Page if user is Already Registered */}
        <p className="text-sm mt-4 text-center">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#B13BFF] underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
