const express = require("express"); //imported express framework into app.js step 1

const mongoose = require("mongoose"); // Imported mongoose for interacting with MongoDB Step 5

//CORS middleware to allow cross-origin requests
const cors = require("cors");

// Load environment variable and configure it
require("dotenv").config();

//step 11
//Import route handlers
const goalRoutes = require("./routes/goalRoutes");

const app = express(); //initialize the express application step 2

const port = process.env.PORT || 3000; // set port at 3000 Step 3

// Allow request from any origin
app.use(cors({ origin: "*" }));

//step 9 Miidleware to parse incoming JSON requests... you can now test with POSTMAN
app.use(express.json());

//step 12 // Define the routes
app.use("/api/goals", goalRoutes);

//cONNECT TO  the MONGODB and Start APP SERVER step 6 (go to model)
const start = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  console.log("MongoDB Connected Successfully");

  //start the express server and listen on the specific port step 4
  app.listen(port, () => {
    console.log(`Server is runing on port ${port}`);
  });
};

start();
//ezebibian4
//XdUN0MoDuxjslTJJ
//mongodb+srv://ezebibian4:XdUN0MoDuxjslTJJ@cluster0.b65u0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//3 IMPORTANT FOLDERS FOR THE BACKEND
// 1. MODEL FOLDER: THE MODEL IS TO GIVE YOUR DATABASE A BLUEPRINT OR SCHEMA OF THE DATA STRUCTURE WHICH WILL BE AN "OBJECT"

// 2. CONTROLLER FOLDER: THE CONTROLLER HANDLES THE REQUEST AND RESPONSE OF EACH FUNCTION.. REQUEST TYPES: GET, POST, DELETE, PATCH, PUT... RESPONSES: (STATUS CODE) 200 GOOD, 404. PAGE NOT FOUND, 201, 500 INTERNAL SERVER ERROR.

// 3. ROUTES FOLDER: ROUTES DEFINES THE PATH WAYS FOR EACH FUNCTION COMING FROM THE CONTROLLER.

//MONGODB: IS THE DATABASE WE WILL BE USING
//POSTMAN: THIS IS USED TO TEST OF OUR REQUEST AND RESPONSE ARE WORKING EFFECTIVELY
