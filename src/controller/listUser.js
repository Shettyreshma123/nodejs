const express = require("express");
const router = express.Router();
const userModel = require("../models/User");



router.get("/", async (req, res) => {
	try {
		let data=await userModel.find();
		data= data.map((item)=>{
			return{
				name:item.name,
				email:item.email,
				phone:item.phone,
			};
			});

		return res.status(200).send(data);
	}
catch (error) {
    return res.status(500).send(error);
  }
});
module.exports=router;