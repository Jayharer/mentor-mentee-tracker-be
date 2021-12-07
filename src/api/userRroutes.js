const express = require("express")
const UserModel = require("../model/userModels")

const router = express.Router()

router.post("/api/user/adduser", async (req, res) => {
    try {
        // console.log(req.body)
        const user = new UserModel(req.body)
        await user.save()
        res.send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/api/getuser", async (req, res) => {
    try {

    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;