import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config";
import { createContext, useState } from "react";

export const InstructorContext = createContext(null);

export default function InstructorProvider({ children }) {
  const [courseLandingFormData, setCourseLandingFormData] = useState(
    courseLandingInitialFormData
  );

  const [courseCurriculumFormData, setCourseCurriculumFormData] = useState(
    courseCurriculumInitialFormData
  );

  const [mediaUploadPregress, setMediaUploadProgress] = useState(false);
  const [mediaUploadPregressPercentage, setMediaUploadPregressPercentage] =
    useState(0);
  const [instructorCoursesList, setInstructorCoursesList] = useState([]);

  return (
    <InstructorContext.Provider
      value={{
        courseLandingFormData,
        setCourseLandingFormData,
        courseCurriculumFormData,
        setCourseCurriculumFormData,
        mediaUploadPregress,
        setMediaUploadProgress,
        mediaUploadPregressPercentage,
        setMediaUploadPregressPercentage,
        instructorCoursesList,
        setInstructorCoursesList,
      }}
    >
      {children}
    </InstructorContext.Provider>
  );
}
