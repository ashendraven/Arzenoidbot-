'use client';

import { useState } from 'react';

// This is your list of manually activated members
const activatedAccounts = [
  { email: 'member1@gmail.com', password: '123456' },
  { email: 'member2@gmail.com', password: 'pass789' },
  { email: 'tester@arzenoid.com', password: 'testing123' }
];

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e: any) => {
    e.preventDefault();
    const user = activatedAccounts.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem('loggedInUser', email); // save session
      window.location.href = '/dashboard'; // go to dashboard
    } else {
      setMessage('❌ Login failed. Not activated or wrong password.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login to Arzenoidbot</h1>
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Login
        </button>
        {message && <p className="mt-4 text-red-500">{message}</p>}
      </form>
    </div>
  );
}
