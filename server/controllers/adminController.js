const AdminTable = require("../models/admin")

const getAdmins = async (req, res) => {
    let Admins;
    await AdminTable.find().then((result) => {
        Admins = result
        res.send({
            data: Admins
        })
    }).catch((err) => {
        res.send({
            error: err
        })
    })
}

const PostAdmins = async (req, res) => {
    let { Name, Role, Address, Contact, Religion, Joining } = req.body;

    const Admin = await new AdminTable({
        Name, Role, Address, Contact, Religion, Joining
    }).save()
        .then((result) => {
            res.send({
                data: result
            })
        }).catch((err) => {
            res.send({
                error: err
            })
        })
}

module.exports = { getAdmins, PostAdmins }
