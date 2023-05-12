const express = require("express");
const router = express.Router();
const userModel = require("../models/User");



router.get("/:id", async (req, res) => {
	try {
		const id =req.params.id;
		let data=await userModel.findById(id);
		// data= data.map((item)=>{
		// 	return{
		// 		name:item.name,
		// 		email:item.email,
		// 		phone:item.phone,
		// 	};
		// 	});
		data={
			name:data.name,
			email:data.email,
			phone:data.phone,
		}


		return res.status(200).send(data);
	}
catch (error) {
    return res.status(500).send(error);
  }
});
module.exports=router;