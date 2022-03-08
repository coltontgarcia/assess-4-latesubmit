const express = require("express");
const cors = require("cors");

const app = express();

const {getCompliment, getFortune, postName, updateName, deleteName} = require("./controller.js");

app.use(cors());

app.use(express.json());

// Compliment 
app.get("/api/compliment", getCompliment);

// Fortune
app.get("/api/fortune", getFortune);

// Post user's name to list
app.post("/api/name", postName);

// Update name in list
app.put("/api/name/:name", updateName);

// Delete name in list
app.delete("/api/name/:name", deleteName);

app.listen(4000, () => console.log("Server running on 4000"));
