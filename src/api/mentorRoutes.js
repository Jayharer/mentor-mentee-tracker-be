const express = require("express")
const SessionModel = require("../model/sessionModels")
const TeamModel = require("../model/teamModels")
const MentorModel = require("../model/mentorModels")
const MentorProfileModel = require("../model/mentorProfileModel")

const router = express.Router();

router.post("/api/mentor/createsession", async (req, res) => {
    try {
        console.log(req.body)
        const session = new SessionModel(req.body)
        await session.save()
        res.send(session)
    } catch (error) {
        res.status(500).send(error)
    }
})

// return all sessions of specific mentors
router.get("/api/mentor/allsessions/:mid", async (req, res) => {
    try {
        const mid = req.params['mid']
        const sessions = await SessionModel.find({ mentorid: mid })
        res.send(sessions)
    } catch (error) {
        res.status(500).send(error)
    }
})

//update session
router.post("/api/mentor/updatesession/:id", async (req, res) => {
    try {
        const filter = { _id: req.params.id };
        const result = await SessionModel.updateOne(filter, { $set: req.body })
        res.send(result)
    } catch (error) {
        res.status(500).send(error)
    }
})

//get session
router.get("/api/mentor/getsession/:id", async (req, res) => {
    try {
        const filter = { _id: req.params.id };
        const session = await SessionModel.findOne(filter);
        res.send(session)
    } catch (error) {
        res.status(500).send(error)
    }
})

// mentor teams
router.get("/api/mentor/allteams/:mentor", async (req, res) => {
    try {
        const mentor = req.params['mentor']
        const teams = await TeamModel.find({ mentor: mentor })
        res.send(teams)
    } catch (error) {
        res.status(500).send(error)
    }
})

// mentor info
router.get("/api/mentor/:uid", async (req, res) => {
    try {
        const uid = req.params['uid']
        const mentor = await MentorModel.find({ uid: uid })
        res.send(mentor)
    } catch (error) {
        res.status(500).send(error)
    }
})

// update mentor profile
router.post("/api/mentor/updatprofile/:id", async (req, res) => {
    try {
        const filter = { _id: req.params.id };
        const result = await MentorProfileModel.updateOne(filter, { $set: req.body })
        res.send(result)
    } catch (error) {
        res.status(500).send(error)
    }
})

// get mentor profile
router.get("/api/mentor/profile/:uid", async (req, res) => {
    try {
        const uid = req.params['uid'];
        const mentor = await MentorProfileModel.find({ uid: uid })
        res.send(mentor)
    } catch (error) {
        res.status(500).send(error)
    }
})

// dashboard
router.get("/api/mentor/barchart/:uid", async (req, res) => {
    try {
        const uid = req.params['uid'];
        const sessions = await SessionModel.find({ mentorid: uid })
        res.send(sessions)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;