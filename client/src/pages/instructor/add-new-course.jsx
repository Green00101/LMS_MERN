import CourseCurriculum from "@/components/instructor-view/courses/add-new-course/course-curriculum";
import CourseLanding from "@/components/instructor-view/courses/add-new-course/course-landing";
import CourseSetting from "@/components/instructor-view/courses/add-new-course/course-setting";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InstructorContext } from "@/context/instructor-context";
import { Tabs } from "@radix-ui/react-tabs";
import { useContext } from "react";

function AddNewCoursePage() {
  const { courseLandingFormData, courseCurriculumFormData } =
    useContext(InstructorContext);
  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    }
    return value === "" || value === null || value === undefined;
  }
  function validateFormData() {
    for (const key in courseLandingFormData) {
      if (isEmpty(courseLandingFormData[key])) {
        return false;
      }
    }
    let hasFreePreview = false;
    for (const item of courseCurriculumFormData) {
      if (
        isEmpty(item.title) ||
        isEmpty(item.videoUrl) ||
        isEmpty(item.public_id)
      ) {
        return false;
      }
      //at least one lecture should be free to Preview
      if (item.freePreview) {
        hasFreePreview = true;
      }
    }
    return hasFreePreview;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold mb-5">Creat a new Course</h1>
        <Button
          disabled={!validateFormData()}
          className="text-sm tracking-wide font-bold px-8"
        >
          SUBMIT
        </Button>
      </div>
      <Card>
        <CardContent>
          <div className="container mx-auto p-4">
            <Tabs defaultValue="curriculum" className=" space-y-4">
              <TabsList>
                <TabsTrigger value="curriculum">curriculum</TabsTrigger>
                <TabsTrigger value="course-landing-page">
                  Course Landing Page
                </TabsTrigger>
                <TabsTrigger value="Setting">Setting</TabsTrigger>
              </TabsList>
              <TabsContent value="curriculum">
                <CourseCurriculum />
              </TabsContent>
              <TabsContent value="course-landing-page">
                <CourseLanding />
              </TabsContent>
              <TabsContent value="Setting">
                <CourseSetting />
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddNewCoursePage;
