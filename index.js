const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const authRouter = require("./src/routes/auth.routes");
const teamRouter = require("./src/routes/team.routes");
const eventRouter = require("./src/routes/event.routes");
const adminRouter  = require("./src/routes/admin.routes");

dotenv.config();
require("./src/db/connect");

const app = express();
const corsOptions = {
  origin: "*",
  methods: "GET,POST,PUT,DELETE",
};
app.use(cors(corsOptions));
app.use(morgan("📋[server-log]: :method :url :status :response-time ms"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.get("/", (req, res) => {
//   return res.send("<h1>Hello from Culrav-Avishkar 2024 server</h1>");
// });

app.use("/api/auth", authRouter);
app.use("/api/team", teamRouter);
app.use("/api/event", eventRouter);
app.use("/api/admin",adminRouter);
// Serve your static files from the Vite build
app.use(express.static(path.join(__dirname, "./client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
