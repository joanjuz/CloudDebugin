const mongoose = require("mongoose");

module.exports = (uri, callback) => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect("mongodb+srv://joanjuz:clouddriveD4@cedbpd3.flaciuc.mongodb.net/cloud-drive?retryWrites=true&w=majority",
			connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
