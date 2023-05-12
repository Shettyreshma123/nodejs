const express = require("express");
const router = express.Router();
const userModel = require("../models/User");
router.post("/", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || name == "") {
      return res.status(201).send("Name is required");
    }
    if (!email || email == "") {
      return res.status(201).send("email is required");
    }
    if (!phone || phone == "") {
      return res.status(201).send("phone is required");
    }

    const oldEmail = await userModel.findOne({ email: email });
    if (oldEmail) {
      return res.status(202).send(" Email is already exist");
    }
    const oldPhone = await userModel.findOne({ phone });
    if (oldPhone) {
      return res.status(202).send(" Phone is already exist");
    }

    const emailpattern = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (
      !emailpattern ||
      emailpattern.length <= 0 ||
      emailpattern.indexOf(" ") >= 0
    ) {
      return res.status(203).send("email is invalid");
    }
    const phonepattern = phone.match(/^\d{10}$/);
    if (
      !phonepattern ||
      phonepattern.length <= 0 ||
      phonepattern.indexOf(" ") >= 0
    ) {
      return res.status(203).send("phone is invalid");
    }

    const data = await userModel.create({
      name: name,
      email: email,
      phone: phone,
    });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
});
module.exports = router;
