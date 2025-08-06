import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword)
      return setError('All fields required');
    if (password !== confirmPassword)
      return setError('Passwords do not match');

    console.log('Registered:', formData);
    setError('');
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#090040] px-4">
      <div className="bg-white p-8 rounded shadow w-[95vw] sm:w-[45vw] md:w-[40vw]">
        <h2 className="text-2xl text-[#471396] font-bold mb-4 text-center">Let us Know You Better!!</h2>
        {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full border px-3 py-2 rounded" />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" type="email" className="w-full border px-3 py-2 rounded" />
          <input name="password" value={formData.password} onChange={handleChange} placeholder="Password" type="password" className="w-full border px-3 py-2 rounded" />
          <input name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" type="password" className="w-full border px-3 py-2 rounded" />
          <button type="submit" className="bg-[#471396] w-full bg-blue-600 text-white py-2 rounded hover:bg-[#B13BFF]">Register</button>
        </form>
        <p className="text-sm mt-4 text-center">
          Already have an account? <span onClick={() => navigate('/login')} className="text-[#B13BFF] underline cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
