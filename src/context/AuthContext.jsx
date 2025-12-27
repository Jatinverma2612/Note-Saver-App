import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("auth-user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const signup = (email, password) => {
    const newUser = { email };
    localStorage.setItem("auth-user", JSON.stringify(newUser));
    setUser(newUser);
    toast.success("Account created");
  };

  const login = (email, password) => {
    const savedUser = localStorage.getItem("auth-user");
    if (!savedUser) {
      toast.error("No account found. Please sign up first.");
      return;
    }

    setUser(JSON.parse(savedUser));
    toast.success("Logged in");
  };

  const logout = () => {
    localStorage.removeItem("auth-user");
    setUser(null);
    toast.success("Logged out");
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
