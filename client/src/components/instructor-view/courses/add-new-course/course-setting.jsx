import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function CourseSetting() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <Label>Upload Course Image</Label>
          <Input type="file" accept="image/*" />
        </div>
      </CardContent>
    </Card>
  );
}

export default CourseSetting;