const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        rollNo: {
            type:"number",
            required:true,
        },
        name: {
            type:"string",
        },
        className: {
            type:"string",
        },
        address: {
            type:"string",
        },
        phoneNumber: {
            type:"number",
        }
    },
    {
        timestamps:true
    }
);

const data = mongoose.model("Students",schema);
module.exports = data;