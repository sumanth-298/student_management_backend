const studentmodel = require("../models/student.models.js")

const createStudents = async(req,res) =>{
    const createOperation = await studentmodel.create(req.body);
    res.status(201).json(createOperation);
};

const getAllStudents = async(req,res) =>{
    const getAllOperation = await studentmodel.find({});
    res.status(200).json(getAllOperation);
};

const getStudentById = async(req,res) =>{
    const {id} = req.params
    const getByIdOperation = await studentmodel.findById(id);
    res.status(200).json(getByIdOperation);
};

const updateStudentById = async(req,res) =>{
    const {id} = req.params
    const updateByIdOperation = await studentmodel.findByIdAndUpdate(
        id,
        req.body
    );
    res.status(200).json(updateByIdOperation);
};

const deleteStudentById = async(req,res) =>{
    const {id} = req.params
    const deleteByIdOperation = await studentmodel.findByIdAndDelete(id);
    res.status(200).json(deleteByIdOperation);
};

module.exports={
    createStudents,
    getAllStudents,
    getStudentById,
    updateStudentById,
    deleteStudentById,
}