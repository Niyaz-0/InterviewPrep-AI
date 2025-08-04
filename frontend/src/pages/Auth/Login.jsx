import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";

export default function Login({ setCurrentPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if(!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }    

    if(!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    //Login API Call
    try {
      
    } catch (error) {
      if(error.response && error.response.data.message) {
        setError(error.response.data.message);
      }
      else{
        setError("Something went wrong, Please try again later")
      }
    }
  };

  return (
    <div className="w-[90vw] md:w-[55vw] lg:w-[38vw] p-7 flex flex-col justify-center">
      <h3 className="text-3xl font-semibold ☐ text-black">Welcome Back</h3>
      <p className="text-lg ☐ text-slate-700 mt-1.5 mb-6">
        Please enter your details to log in
      </p>
      <form onSubmit={handleLogin}>
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="john@example.com"
          type="text"
        />
        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 Characters"
          type="password"
        />

        {error && <p className="text-red-500 text-base pb-2.5">{error}</p>}
        <button type="submit" className="btn-primary">
          LOGIN
        </button>
        <p className="text-lg text-slate-800 mt-3 font-medium">
          Don't have an account?{" "}
          <button
            className="font-bold text-primary underline cursor-pointer"
            onClick={() => {
              setCurrentPage("signup");
            }}
          >
            SignUp
          </button>
        </p>
      </form>
    </div>
  );
}
