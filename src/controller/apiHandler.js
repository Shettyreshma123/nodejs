const express=require("express");
const router =express.Router();
const addUser=require("./addUser");
const listUser=require("./listUser")
const partUser=require("./particularUser")

router.use("/add_user",addUser);
router.use("/list_user",listUser);
router.use("/part_user",partUser);

module.exports=router;