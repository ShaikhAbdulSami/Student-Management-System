const express = require("express");
const AdminTable = require("../../models/admin");
const { getAdmins, PostAdmins } = require("../../controllers/adminController");
const router = express.Router();

router.get("/admins", getAdmins);
router.post("/admin/new", PostAdmins);

module.exports = router;
