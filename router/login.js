import express from "express";
const router = express.Router();

//   GET  http://localhost:3000/login
//   POST http://localhost:3000/rigester
// UPDATE http://localhost:3000/dashboard

function login(req, res) {
  res.send("Welcome to log in");
}
function loginInfo(req, res) {
  res.send("POST log in");
}
router.route("/").get(login).post(loginInfo);

export default router;
