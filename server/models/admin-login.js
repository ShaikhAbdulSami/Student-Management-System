const mongoose = require("mongoose");

const Admin_Login = new mongoose.Schema({
    Email: { type: String, required: true, Unique: true },
    Password: { type: String, required: true },
    Username: { type: String, required: true, Unique: true },
    Id: { type: Schema.Types.ObjectId, ref: 'Admins', required: true, Unique: true },
},

    {
        collection: "Admin_Login",
        timestamps: true,
    }
);
// Creating Schema Model
const model = mongoose.model("Admin_Login", Admin_Login);
// Exporting Model
module.exports = model;