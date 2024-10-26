const express = require("express");
const {
  addNewCourse,
  getAllCourse,
  getCourseDetailsById,
  updateCourseById,
} = require("../../controllers/instructor-controller/course-controller");

const router = express.Router();

router.post("/add", addNewCourse);
router.get("/get", getAllCourse);
router.get("/get/details/:id", getCourseDetailsById);
router.put("/update/:id", updateCourseById);

module.exports = router;
