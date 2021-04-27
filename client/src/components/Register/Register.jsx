import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const registeredData = {
        name,
        email,
        password,
      };
      await axios.post('http://localhost:5000/auth/register', registeredData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register a new Account</h1>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        name="name"
        placeholder="Type your name"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        name="email"
        placeholder="Type your email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        name="password"
        placeholder="Type your password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
