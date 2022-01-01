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

router.get("/api/user/getuser/:uid", async (req, res) => {
    try {
        const uid = req.params['uid']
        const user = await UserModel.findOne({ uid : uid});
        res.send(user)
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;