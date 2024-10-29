import { createContext, useState } from "react";

export const StudentContext = createContext(null);

export default function StudentProvider({ children }) {
  const [studentCoursesList, setStudentCourseList] = useState([]);
  return <StudentContext.Provider>{children}</StudentContext.Provider>;
}
