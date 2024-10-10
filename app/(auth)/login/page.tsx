"use client";
import React, { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block  text-[#777777]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 bg-white border-2 border-black rounded-md focus:border-[#FFD700] hover:border-[#FFC400] focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#777777]">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 bg-white border-2 border-black rounded-md focus:border-[#FFD700] hover:border-[#FFC400] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-black bg-[#FFD700] rounded-md hover:bg-[#FFC400] transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" passHref>
              <span className="text-[#FFD700] cursor-pointer hover:text-[#FFC400]">
                Sign up
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
