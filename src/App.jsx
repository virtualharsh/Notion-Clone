import { useState } from "react";
import AuthForm from "./components/Login-Signup/Login-Signup";
import NoteBody from "./components/Notes/NoteBody";
import SidebarLayout from "./components/Sidebar/SidebarLayout";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="w-full h-full block md:flex">
      {!isAuthenticated ? (
        <AuthForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          <SidebarLayout />
          <NoteBody />
        </>
      )}
    </div>
  );
}
