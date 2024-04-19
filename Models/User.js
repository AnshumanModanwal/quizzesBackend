const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    // Define the email field with type String, required, and trimmed
		email: {
			type: String,
			required: true,
			trim: true,
		},

		// Define the password field with type String and required
		password: {
			type: String,
			required: true,
		},

})
module.exports = mongoose.model("user",userSchema );