/* eslint-disable no-unused-vars */
import React, { useState } from "react";
 import {Rings} from "./design/Header";
 import { service1, service2, service3, check } from "../assets";
 import {Gradient} from "./design/Services";
import { HamburgerMenu ,SideLines,BackgroundCircles } from "./design/Header";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        // Handle successful login, e.g., redirect to dashboard
        console.log("logged in successfully");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-5">
  
       <Gradient />
       <HamburgerMenu />
       <BackgroundCircles />
       <SideLines />
     
      {/* <div className="relative z-10 w-full max-w-md shadow-lg p-8 bg-n-8 rounded-xl"> */}
      <div className="w-full max-w-md bg-n-8 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6 ">
          <div>
            
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
