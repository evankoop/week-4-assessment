const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {getCompliment, getFortune, addGoals, deleteGoals, randomVacation, getInspo} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.post("/api/goals", addGoals)
app.delete("/api/goals", deleteGoals)
app.get("/api/vacations", randomVacation)
app.get("/api/inspiration", getInspo)

app.listen(4000, () => console.log("Server running on 4000"));
