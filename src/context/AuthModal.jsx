import { useState } from "react";
import { X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const AuthModal = ({ onClose }) => {
  const { login, signup } = useAuth();
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password) return;
    isSignup ? signup(email, password) : login(email, password);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl p-6 relative">
        <button onClick={onClose} className="absolute right-4 top-4">
          <X />
        </button>

        <h2 className="text-2xl font-bold mb-6">
          {isSignup ? "Create account" : "Welcome back"}
        </h2>

        <input
          placeholder="Email"
          className="w-full mb-3 p-3 rounded border dark:bg-slate-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          className="w-full mb-6 p-3 rounded border dark:bg-slate-800"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold"
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>

        <p className="text-sm mt-4 text-center">
          {isSignup ? "Already have an account?" : "New here?"}{" "}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-orange-500 font-semibold"
          >
            {isSignup ? "Login" : "Sign up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
