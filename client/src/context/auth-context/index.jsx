import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { registerServices, loginServices, checkAuthServices } from "@/services";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const [auth, setAuth] = useState({
    authenticate: false,
    user: null,
  });

  async function handleRegisterUser(event) {
    event.preventDefault();
    const data = await registerServices(signUpFormData);
  }

  async function handleLoginrUser(event) {
    event.preventDefault();
    const data = await loginServices(signInFormData);
    console.log("Response Data:", data); // 输出响应对象的 data 属性
    if (data.data.success) {
      sessionStorage.setItem(
        "accessToken",
        JSON.stringify(data.data.data.accessToken)
      );
      setAuth({ authenticate: true, user: data.data.data.user });
    } else {
      setAuth({ authenticate: false, user: null });
    }
  }

  async function checkAuthUser() {
    const data = await checkAuthServices();
    if (data.data.success) {
      setAuth({ authenticate: true, user: data.data.data.user });
    } else {
      setAuth({ authenticate: false, user: null });
    }
  }
  useEffect(() => {
    checkAuthUser();
  }, []);

  console.log(auth);
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
