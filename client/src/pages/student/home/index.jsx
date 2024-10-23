import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/auth-context";
import { useContext } from "react";

function StudentHomePage() {
  const { restCredentials } = useContext(AuthContext);
  function handleLogout() {
    restCredentials();
    sessionStorage.clear;
  }

  return (
    <div>
      Home Page
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default StudentHomePage;