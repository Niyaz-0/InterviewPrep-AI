import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";

export default function Signup({ setCurrentPage }) {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Handle Sign Up Form Submit
  const handleSignUp = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-3xl font-semibold text-black">Create an Account</h3>
      <p className="text-lg text-slate-700 mt-1.5 mb-6">Join us today by entering your details below.</p>
      <form onSubmit={handleSignUp}>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
          <Input
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            placeholder="John"
            label="Full Name"
            type="text"
          />

          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="john@example.com"
            label="Email"
            type="text"
          />

          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            placeholder="Min 8 Characters"
            label="Password"
            type="password"
          />
        </div>

        {error && <p className="text-red-500 text-base pb-3">{error}</p>}

        <button type="submit" className="btn-primary">
          SIGN UP
        </button>

        <p className="text-lg text-slate-800 mt-3 font-medium">
          Already Have an Account?{" "}
          <button className="font-bold text-primary underline cursor-pointer" onClick={() => setCurrentPage("login")}>
            Login
          </button>
        </p>
      </form>
    </div>
  );
}
