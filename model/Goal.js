//step 7 import the Mongoose library to interact with mongodb
const mongoose = require("mongoose");

//Define the schema for "Goal" collection
const GoalSchema = new mongoose.Schema({
  title: {
    type: String, // The title must be a strig
    required: true, // This field is mandatory
  },

  description: String, // Optional field: A brief description of the goal

  progress: {
    type: Number, // The progress must be a number
    required: true, // This field is mandatory
    min: 0, // The minimum value allowed is 0
    max: 100, // Thw maximum value allowed is 100
  },
});


//Export the Mongoose model for use in other parts of the app
//"Goal" is the name of the model, and it uses GoalSchema as its structure
module.exports = mongoose.model("Goal", GoalSchema); //to be exported to controller...

//then go to the controller to contiune
