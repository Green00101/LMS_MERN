import { createContext, useState } from "react";

export const StudentContext = createContext(null);

export default function StudentProvider({ children }) {
  const [studentViewCoursesList, setStudentViewCourseList] = useState([]);
  return (
    <StudentContext.Provider
      value={{ studentViewCoursesList, setStudentViewCourseList }}
    >
      {children}
    </StudentContext.Provider>
  );
}
