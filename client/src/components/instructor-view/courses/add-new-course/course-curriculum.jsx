import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { InstructorContext } from "@/context/instructor-context";
import { Label } from "@radix-ui/react-label";
import { useContext } from "react";

function CourseCurriculum() {
  const { courseCurriculumFormData, setCrouseCurriculumFormData } =
    useContext(InstructorContext);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Creat Course Curriculum</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Add Lecture</Button>
        <div className="mt-4 space-y-4">
          {courseCurriculumFormData.map((curriculumItem, index) => (
            <div className="border p-5 rounded-md">
              <div className="flex gap-5 items-center">
                <h3 className="font-semibold">Lecture {index + 1}</h3>
                <Input
                  name={`tittle-${index + 1}`}
                  placeholder="Enter lecture tittle"
                  className="max-w-96"
                />
                <div className="flex tiems-center space-x-2">
                  <Switch checked={false} id={`freePreview-${index + 1}`} />
                  <Label htmlFor={`freePreview-${index + 1}`}>
                    Free Preview
                  </Label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default CourseCurriculum;
