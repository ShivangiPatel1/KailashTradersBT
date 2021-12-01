const { AutoEncryptionLoggerLevel } = require("mongodb");
const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("login", LoginSchema);
