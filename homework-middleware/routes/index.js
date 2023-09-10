import express from "express"
import studentRouter from "./student.route.js"
import teacherRouter from "./teacher.route.js"
import subjectRouter from "./subject.route.js"
// import staticsticRouter from "./system.route.js"


const router = express.Router();

router.use("/student",studentRouter )
router.use("/teacher",teacherRouter )
router.use("/subject",subjectRouter )
// router.use("/system",staticsticRouter )

export default router