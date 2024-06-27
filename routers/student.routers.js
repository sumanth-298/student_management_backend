const express = require("express")

const router = express.Router()

const {
    createStudents,
    getAllStudents,
    getStudentById,
    updateStudentById,
    deleteStudentById,
} =require("../controllers/student.controllers.js")

router.get("/",getAllStudents);
router.get("/:id",getStudentById);
router.post("/",createStudents);
router.put("/:id",updateStudentById);
router.delete("/:id",deleteStudentById);

module.exports = router;