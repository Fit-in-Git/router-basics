import express from "express";
import morgan from "morgan";
import login from "./router/login.js";
const app = express();
app.use(morgan("dev"));
app.use("/login", login);

app.get("/", (req, res) => {
  console.log(process);
  res.send("Hi, this is BE server");
});

export default app;
