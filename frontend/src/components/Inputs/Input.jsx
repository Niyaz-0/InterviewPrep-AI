import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function Input({ value, onChange, label, placeholder, type }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="text-xl font-medium text-slate-800">{label}</label>
      <div className="input-box">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-lg"
          value={value}
          onChange={onChange}
        />
        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={22}
                onClick={() => togglePassword()}
                className="text-primary cursor-pointer"
              />
            ) : (
              <FaRegEyeSlash
                size={20}
                onClick={() => togglePassword()}
                className="text-slate-400 cursor-pointer"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
