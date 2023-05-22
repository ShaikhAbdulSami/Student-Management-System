const mongoose = require("mongoose");

const Admins = new mongoose.Schema({
    Name: { type: String, required: true },
    Role: { type: String, required: true },
    Address: { type: String, required: true },
    Contact: { type: Number, required: true, Unique: true },
    Religion: { type: String, required: true },
    Joining: { type: Date, required: true },

},

    {
        collection: "Admins",
        timestamps: true,
    }
);
// Creating Schema Model
const model = mongoose.model("Admins", Admins);
// Exporting Model
module.exports = model;