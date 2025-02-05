import dotenv from "dotenv";
dotenv.config();
import http from "http";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

// env object
// prosse -> node
// window -> Browser
// golobal js obj
// console

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`server is ready on http://localhost:${PORT}`);
});
