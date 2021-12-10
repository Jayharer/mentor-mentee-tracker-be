const express = require("express")
const BatchModel = require("../model/batchModels")
const TeamModel = require("../model/teamModels")
const MenteeModel = require("../model/menteeModels")
const MentorModel = require("../model/mentorModels")

const router = express.Router()

// Team
router.post("/api/admin/createbatch", async (req, res) => {
    try {
        // console.log(req.body)
        const batch = new BatchModel(req.body)
        await batch.save()
        res.send(batch)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post("/api/admin/createteam", async (req, res) => {
    try {
        const team = new TeamModel(req.body)
        await team.save()
        res.send(team)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/api/admin/allteams", async (req, res) => {
    try {
        const teams = await TeamModel.find();
        res.send(teams)
    } catch (error) {
        res.status(500).send(error)
    }
})

// Mentee
router.get("/api/admin/allmentees", async (req, res) => {
    try {
        const mentees = await MenteeModel.find();
        res.send(mentees)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/api/admin/getmentee/:uid", async (req, res) => {
    try {
        const uid = req.params['uid']
        const mentee = await MenteeModel.findOne({ uid : uid});
        res.send(mentee)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post("/api/admin/creatementee", async (req, res) => {
    try {
        const mentee = new MenteeModel(req.body)
        await mentee.save()
        res.send(mentee)
    } catch (error) {
        res.status(500).send(error)
    }
})

// Mentor
router.get("/api/admin/allmentors", async (req, res) => {
    try {
        const mentors = await MentorModel.find();
        res.send(mentors)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/api/admin/getmentor/:uid", async (req, res) => {
    try {
        const uid = req.params['uid']
        const mentors = await MentorModel.findOne({ uid : uid});
        res.send(mentors)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post("/api/admin/creatementor", async (req, res) => {
    try {
        const mentor = new MentorModel(req.body)
        await mentor.save()
        res.send(mentor)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;