import { Skeleton } from "@/components/ui/skeleton";
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

  const [loading, setLoading] = useState(true);

  async function handleRegisterUser(event) {
    event.preventDefault();
    const data = await registerServices(signUpFormData);
  }

  async function handleLoginrUser(event) {
    event.preventDefault();
    const data = await loginServices(signInFormData);
    if (data.success) {
      sessionStorage.setItem(
        "accessToken",
        JSON.stringify(data.data.accessToken)
      );
      setAuth({ authenticate: true, user: data.data.user });
      setLoading(false);
    } else {
      setAuth({ authenticate: false, user: null });
      setLoading(false);
    }
  }

  async function checkAuthUser() {
    try {
      const data = await checkAuthServices();
      if (data.success) {
        setAuth({ authenticate: true, user: data.data.user });
        setLoading(false);
      } else {
        setAuth({ authenticate: false, user: null });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      if (!error?.response?.data?.success) {
        setAuth({ authenticate: false, user: null });
        setLoading(false);
      }
    }
  }
  function restCredentials() {
    setAuth({
      authenticate: false,
      user: null,
    });
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
        auth,
        restCredentials,
      }}
    >
      {loading ? <Skeleton /> : children}
    </AuthContext.Provider>
  );
}
