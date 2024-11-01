import { StudentContext } from "@/context/student-context";
import { useContext } from "react";
import { useParams } from "react-router-dom";

function StudentViewCourseDetailsPage() {
  const {
    studentViewCourseDetails,
    setStudentViewCourseDetails,
    currentCourseDetailsId,
    setCurrentCourseDetailsId,
  } = useContext(StudentContext);
  const params = useParams();
  console.log(params);

  return <div>StudentViewCourseDetailsPage</div>;
}

export default StudentViewCourseDetailsPage;
