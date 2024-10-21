import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { registerServices, loginServices } from "@/services";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);

  async function handleRegisterUser(event) {
    event.preventDefault();
    const data = await registerServices(signUpFormData);
  }

  async function handleLoginrUser(event) {
    event.preventDefault();
    const data = await loginServices(signInFormData);
  }

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser,
        handleLoginrUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
