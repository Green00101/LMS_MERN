import InstructorCourses from "@/components/instructor-view/courses";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { Tabs } from "@/components/ui/tabs";
import { BarChart, Book, LogOut } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import InstructorDashBoard from "@/components/instructor-view/dashboard";
import { AuthContext } from "@/context/auth-context";
import { InstructorContext } from "@/context/instructor-context";
import { fetchInstructorCourseListService } from "@/services";

function InstructorDashboardpage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { restCredentials } = useContext(AuthContext);
  const { instructorCoursesList, setInstructorCoursesList } =
    useContext(InstructorContext);

  async function fetchAllCourses() {
    const response = await fetchInstructorCourseListService();
    console.log(response?.success);
    console.log(response?.data);

    if (response?.success) {
      setInstructorCoursesList(response?.data);
    }
  }
  useEffect(() => {
    fetchAllCourses();
  }, []);
  const menuItems = [
    {
      icon: BarChart,
      label: "Dashboard",
      value: "dashboard",
      component: <InstructorDashBoard />,
    },
    {
      icon: Book,
      label: "Courses",
      value: "courses",
      component: <InstructorCourses listOfCourses={instructorCoursesList} />,
    },
    {
      icon: LogOut,
      label: "Logout",
      value: "logout",
      component: null,
    },
  ];

  function handleLogout() {
    restCredentials();
    sessionStorage.clear();
  }

  return (
    <div className="flex h-full min-h-screen bg-gray-100 ">
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Instructor View</h2>
          <nav>
            {menuItems.map((menuItems) => (
              <Button
                className="w-full justify-start mb-2"
                key={menuItems.value}
                variant={activeTab === menuItems.value ? "secondary" : "ghost"}
                onClick={
                  menuItems.value === "logout"
                    ? handleLogout
                    : () => setActiveTab(menuItems.value)
                }
              >
                <menuItems.icon className="mr-2 h-4 w-4" />
                {menuItems.label}
              </Button>
            ))}
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {menuItems.map((menuItems) => (
              <TabsContent key={menuItems.value} value={menuItems.value}>
                {" "}
                {/* fix the warning key={menuItems.value} */}
                {menuItems.component !== null ? menuItems.component : null}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default InstructorDashboardpage;
