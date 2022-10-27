const User = require("../models/user");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World");
})

router.get("/test", (req, res) => {
    res.send("This is test page");
})

router.get("/users", async (req, res) => {
    try {
        const user = new User({ name: 'Vitaliy Chepyuk', age: 54 });
        await user.save();
        const users = await User.find();
        res.json(users);
    } catch (e) {
        res.send(e.message);
    }

})

module.exports = router;